import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({ message: 'Hello World!'})
})

const port = parseInt(process.env.NAME!) || 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})

export default app
