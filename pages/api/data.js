import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
    console.log('API: /api/data');
    try {
        const client = await clientPromise;
        const db = client.db('firdousi'); // Replace with your database name

        // Get the limit from query parameters, or use a default value (e.g., 3)
        const limit = parseInt(req.query.limit) || 3;

        const articles = await db.collection('articles').find({}).sort({ date_created: -1 }).limit(limit).toArray(); // Fetch latest articles
        const learnings = await db.collection('learnings').find({}).sort({ date_created: -1 }).limit(limit).toArray(); // Fetch latest learnings
        const projects = await db.collection('projects').find({}).sort({ date_created: -1 }).limit(limit).toArray(); // Fetch latest projects

        res.status(200).json({ articles, learnings, projects });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}