import app from './index';

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await app.request('http://localhost')
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data).toEqual({ message: 'Hello World!' }
    );
  });
});