import { createRoute } from "@hono/zod-openapi"

export const route = createRoute({
  method: 'get',
  path: '/',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string'
              }
            }
          }
        }
      }
    }
  },
  })
