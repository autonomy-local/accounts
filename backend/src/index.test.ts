import app from './index';

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await app.request('http://localhost')
    await expect(response.status).toBe(200);
  });
});