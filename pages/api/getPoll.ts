// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "$/prisma";

type Data = {
    message: string,
    error: boolean,
    data?: any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // Check if the request is a POST request
    if (req.method !== "POST") {
        res.status(200).json({ message: "Method not allowed", error: true });
        return;
    }

    // Check if the parameter `id` is present
    if (!req.body.id) {
        res.status(200).json({ message: "Missing parameters", error: true });
        return;
    }

    const { id } = req.body;

    // Get the poll
    const data = await prisma.poll.findUnique({
        where: {
            id: parseInt(id)
        }
    });

    // Check if the poll exists
    if (!data) {
        res.status(200).json({ message: "Poll not found", error: true });
        return;
    }

    const votes = await prisma.vote.findMany({
        where: {
            pollId: parseInt(id)
        }
    });

    res.status(200).json({ message: "Poll found", error: false, data: { ...data, votes } });
}
