#!/usr/bin/env node

// Start Vite development server
const { createServer } = require('vite');
const path = require('path');

async function startDevServer() {
  const server = await createServer({
    root: __dirname,
  });

  await server.listen();

  console.log('\n✅ Server is running!');
  server.printUrls();
}

startDevServer().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
