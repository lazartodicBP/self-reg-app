import type { NextApiRequest, NextApiResponse } from "next";
import { login, getSessionId } from "@/services/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    if (!getSessionId()) {
      await login();
    }

    const sessionId = getSessionId()!;

    if (!sessionId) {
      return res.status(401).json({ error: "Session ID not available" });
    }

    const body = req.body;
    console.log("CREATE ACCOUNT BODY:", JSON.stringify(body));

    const response = await fetch(`${process.env.API_URL}/ACCOUNT`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        sessionid: sessionId!,
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    console.log("RESPONSE AFTER CREATE ACCOUNT:", JSON.stringify(result));

    return res.status(200).json(result);
  } catch (error) {
    console.error("API /account error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
