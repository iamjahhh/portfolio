import Redis from "ioredis";

const redis = new Redis("rediss://default:AcM4AAIjcDFkZTEzNjNjZmQwNDY0ODExYjg3OGNhYzhjYmViNDQ0N3AxMA@rested-glowworm-49976.upstash.io:6379");

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const updatedLikes = await redis.incr("likes");
            res.status(200).json({ likes: updatedLikes });
        } catch (error) {
            console.error("Error updating likes:", error);
            res.status(500).json({ error: "Failed to update likes" });
        }
    } 
    else if (req.method === "GET") {
        try {
            const likes = await redis.get("likes");
            res.status(200).json({ likes: parseInt(likes) || 0 });
        } catch (error) {
            console.error("Error fetching likes:", error);
            res.status(500).json({ error: "Failed to fetch likes" });
        }
    }
    else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
