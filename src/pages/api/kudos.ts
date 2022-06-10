// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/backend/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const kudos = await prisma.kudo.findMany();
    res.status(200).json(kudos);
  }

  if (req.method === "POST") {
    const newKudo = await prisma.kudo.create({
      data: JSON.parse(req.body)
    });
    res.status(200).json(newKudo);
  }
}
