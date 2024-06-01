import customAxios from "@/lib/axios";
import { google } from "googleapis";

export async function POST(req: Request) {
  const { code } = await req.json();

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/callback`
  );

  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  const oauth2 = google.oauth2({
    auth: oauth2Client,
    version: "v2",
  });

  const { data } = await oauth2.userinfo.get();

  const user = {
    email: data.email,
    username: data.name,
    exp: 0,
  };

  // 서버에 요청 필요
  const result = await customAxios({
    method: "POST",
    url: "/api/login",
    data: user,
  }).then((res) => res.data);

  return new Response(JSON.stringify(result), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function GET(req: Request) {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/callback`
  );

  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  });

  return new Response(
    JSON.stringify({
      url,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
