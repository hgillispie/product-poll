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

    // Check if the parameter `id` and `option` are present
    if (!req.body.id || !req.body.option) {
        res.status(200).json({ message: "Missing parameters", error: true });
        return;
    }

    const { id, option } = req.body;

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

    // Check if the option is valid
    const options = data.choices.split(",");
    if (!options.includes(option)) {
        res.status(200).json({ message: "Invalid option", error: true });
        return;
    }

    // Cast the vote
    await prisma.vote.create({
        data: {
            choice: option,
            pollId: parseInt(id)
        },
    });

    // Get all the votes
    const votes = await prisma.vote.findMany({
        where: {
            pollId: parseInt(id)
        }
    });

    res.status(200).json({ message: "Vote casted", error: false, data: votes });
}
