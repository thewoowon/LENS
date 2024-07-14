import { NextRequest, NextResponse } from "next/server";

async function fetchWithTimeout(url: string, options: any, timeout = 10000) {
  // 타임아웃 시간을 10초로 설정
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await fetch(url, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);
  return response;
}

export async function POST(req: NextRequest) {
  const { prompt, sessionId, accessToken } = await req.json();
  try {
    const response = await fetchWithTimeout(
      process.env.NEXT_PUBLIC_API_URL + "/v1/llm/execute_llm",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ prompt, session_id: sessionId }),
      }
    );

    if (!response.body) {
      throw new Error("No response body");
    }

    const stream = new ReadableStream({
      start(controller) {
        const reader = response.body?.getReader();
        function push() {
          reader
            ?.read()
            .then(({ done, value }) => {
              if (done) {
                controller.close();
                return;
              }
              controller.enqueue(value);
              push();
            })
            .catch((err) => {
              controller.error(err);
            });
        }
        push();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Error fetching stream data:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch stream data" }),
      { status: 500 }
    );
  }
}
