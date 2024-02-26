const request = require('supertest');
const app = require('../src/index');
require("dotenv").config();

describe('Testando a Aplicação HTTP', () => {
    // method get
    it('Testing method: get in route /api/v1/health', async () => {
      const response = await request(app).get('/api/v1/health');
      expect(response.text).toBe('{ status: "DOWN"}');
    });
});