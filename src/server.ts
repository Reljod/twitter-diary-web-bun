const server = Bun.serve({
  hostname: "localhost",
  port: 8001,
  fetch: handler,
});

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  if (url.pathname === "/media/css/index.css") {
    return new Response(Bun.file("./dist/index.css"));
  }

  if (url.pathname === "/media/js/index.js") {
    return new Response(Bun.file("./dist/index.js"));
  }

  return new Response(Bun.file("./src/client/index.html"));
}

console.log(`Listening to http://${server.hostname}:${server.port}`);
