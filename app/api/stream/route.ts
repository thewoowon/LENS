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

    if (!accessToken) {
      throw new Error("Access token is required");
    }

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

    if (!sessionId) {
      // 세션 ID가 없는 경우, 새로운 세션을 생성하고 리디렉션 응답을 반환
      // 형식은 다음과 같음 {"redirect_path":"/chat/b020a6cc-b5fe-4f42-879c-c9731693dda0"}
      const { redirect_path } = await response.json();
      return new NextResponse(
        JSON.stringify({ redirect_path }),
        { status: 307 }
      );
    }

    console.log("Response status:", response.status);

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
