import axios from "axios";

export async function GET(req: Request) {

    const { accessToken } = await req.json();

    const result = await axios({
        withCredentials: true,
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
        },
        method: "GET",
        url: "/v1/history/get_history",
    }).then((res) => res.data);

    return new Response(
        JSON.stringify({
            result,
        }),
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
}