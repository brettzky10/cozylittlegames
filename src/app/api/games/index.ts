import { NextApiRequest, NextApiResponse } from "next";
import db from "@/lib/prisma-db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end("Method Not Allowed");
  }

  try {


    const games = await db.game.findMany();

    return res.status(200).json(games);
  } catch (error: any) {
    return res.status(400).json({ message: error?.message });
  }
}
