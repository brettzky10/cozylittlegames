import { NextApiRequest, NextApiResponse } from "next";
//import serverAuth from "@/lib/server-auth";
import db from "@/lib/prisma-db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const allowedMethods = ["POST", "DELETE"];

  if (!allowedMethods.includes(req.method as string)) {
    res.setHeader("Allow", allowedMethods);
    return res.status(405).end("Method Not Allowed");
  }

  try {
    //const { currentUser } = await serverAuth(req, res);
    const { gameId } = req.query;

    if (typeof gameId !== "string" || !gameId) {
      throw new Error("Invalid Id");
    }

    const game = await db.game.findUnique({
      where: {
        id: gameId,
      },
    });

    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }

    let favoriteIds = {};
    if (req.method === "POST") {
      favoriteIds = { push: gameId };
    } else if (req.method === "DELETE") {
      favoriteIds = currentUser.favoriteIds.filter(
        (id: string) => id !== gameId
      );
    }

    const user = await db.user.update({
      where: {
        email: currentUser.email as string,
      },
      data: {
        favoriteIds,
      },
    });

    return res.status(200).json(user);
  } catch (error: any) {
    return res.status(400).json({ message: error?.message });
  }
}
