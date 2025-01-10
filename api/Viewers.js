import Redis from "ioredis";

const redis = new Redis("rediss://default:AcM4AAIjcDFkZTEzNjNjZmQwNDY0ODExYjg3OGNhYzhjYmViNDQ0N3AxMA@rested-glowworm-49976.upstash.io:6379");

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const updatedViewers = await redis.incr("viewers");
            res.status(200).json({ viewers: updatedViewers });
        } catch (error) {
            console.error("Error updating viewers:", error);
            res.status(500).json({ error: "Failed to update viewers" });
        }
    } 
    else if (req.method === "GET") {
        try {
            const viewers = await redis.get("viewers");
            res.status(200).json({ viewers: parseInt(viewers) || 0 });
        } catch (error) {
            console.error("Error fetching viewers:", error);
            res.status(500).json({ error: "Failed to fetch viewers" });
        }
    }
    else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
