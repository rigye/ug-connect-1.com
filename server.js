import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { businessCategories, categoryProducts, featuredProducts, jobListings, courseCatalog } from './src/data/businesses.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, 'server', 'db.json');
const app = express();

app.use(cors());
app.use(express.json());

async function readDb() {
  try {
    const raw = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch (error) {
    return { posts: [], messages: [], activities: [] };
  }
}

async function writeDb(data) {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

app.get('/api/categories', (_req, res) => {
  res.json(businessCategories);
});

app.get('/api/categories/:id/products', (req, res) => {
  const products = categoryProducts[req.params.id];
  if (!products) {
    return res.status(404).json({ error: 'Category not found' });
  }
  res.json(products);
});

app.get('/api/featured', (_req, res) => {
  res.json(featuredProducts);
});

app.get('/api/jobs', (_req, res) => {
  res.json(jobListings);
});

app.get('/api/courses', (_req, res) => {
  res.json(courseCatalog);
});

app.post('/api/auth/signin', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  return res.json({ id: Date.now(), name, email, role: 'UGConnect Member' });
});

app.get('/api/posts', async (_req, res) => {
  const db = await readDb();
  res.json(db.posts);
});

app.post('/api/posts', async (req, res) => {
  const { text, author = 'UGConnect User' } = req.body;
  if (!text || !text.trim()) {
    return res.status(400).json({ error: 'Post text is required' });
  }

  const db = await readDb();
  const newPost = {
    id: Date.now(),
    author,
    role: 'Community Member',
    location: 'Kampala',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80',
    text: text.trim(),
    tags: ['Community'],
    reactions: '0',
    comments: '0',
    createdAt: new Date().toISOString(),
  };

  db.posts.unshift(newPost);
  await writeDb(db);
  res.status(201).json(newPost);
});

app.get('/api/messages', async (_req, res) => {
  const db = await readDb();
  res.json(db.messages);
});

app.post('/api/messages', async (req, res) => {
  const { text, user = 'You', channel = 'General' } = req.body;
  if (!text || !text.trim()) {
    return res.status(400).json({ error: 'Message text is required' });
  }

  const db = await readDb();
  const newMessage = {
    id: Date.now(),
    user,
    avatar: user[0] ? user[0].toUpperCase() : 'U',
    text: text.trim(),
    time: 'now',
    channel,
  };

  db.messages.push(newMessage);
  await writeDb(db);
  res.status(201).json(newMessage);
});

app.get('/api/activities', async (_req, res) => {
  const db = await readDb();
  res.json(db.activities);
});

app.post('/api/activities', async (req, res) => {
  const { text, date, icon = '🌱' } = req.body;
  if (!text || !text.trim()) {
    return res.status(400).json({ error: 'Activity text is required' });
  }

  const db = await readDb();
  const newActivity = {
    id: Date.now(),
    text: text.trim(),
    date: date || new Date().toISOString().slice(0, 10),
    status: 'planned',
    icon,
  };

  db.activities.unshift(newActivity);
  await writeDb(db);
  res.status(201).json(newActivity);
});

app.listen(4000, () => {
  console.log('✅ UGConnect API running on http://localhost:4000');
});
