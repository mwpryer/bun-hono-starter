import { Hono } from "hono"

const app = new Hono()

app.get("/v1/api", (c) => {
  return c.text("ok")
})

export default app
