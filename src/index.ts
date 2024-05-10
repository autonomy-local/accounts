import { serve } from '@hono/node-server'
import { OpenAPIHono } from '@hono/zod-openapi'
import { route } from './router'

const app = new OpenAPIHono()

app.openapi(route, (c) => {
  return c.json({ message: 'Hello World!' })
})

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    title: 'My API',
    version: '1.0.0'
  },
})

const port = parseInt(process.env.PORT!) || 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})

export default app
