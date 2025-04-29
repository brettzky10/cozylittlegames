import { NextApiRequest, NextApiResponse } from "next";
import db from "@/lib/prisma-db";
import serverAuth from "@/lib/server-auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end("Method Not Allowed");
  }

  try {
    await serverAuth(req, res);

    const { gameId } = req.query;

    if (typeof gameId !== "string" || !gameId) {
      throw new Error("Invalid Id");
    }

    const games = await db.game.findUnique({
      where: {
        id: gameId,
      },
    });

    return res.status(200).json(games);
  } catch (error: any) {
    return res.status(400).json({ message: error?.message });
  }
}
