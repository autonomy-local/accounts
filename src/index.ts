import { serve } from '@hono/node-server'
import { OpenAPIHono } from '@hono/zod-openapi'
import { swaggerUI } from '@hono/swagger-ui'
import { route } from './router'

const app = new OpenAPIHono()

app.openapi(route, (c) => {
  return c.json({ message: 'Hello World!' })
})

app.doc('/specification', {
  openapi: '3.0.0',
  info: {
    title: 'Accounts API',
    version: '1.0.0'
  },
}).get('/doc', swaggerUI({
  url: '/specification'
}))

const port = parseInt(process.env.PORT!) || 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})

export default app
