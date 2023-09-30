import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../app';
import { User } from '../models';
import { testAuthLogin, testAuthRegister } from './helper/helperData';

beforeAll(async () => {
  await User.deleteMany();
});

describe('[AUTH] esta es la prueba de /api/auth', () => {
  test('esto deberia de retornar 404', async () => {
    const response = await request(app).post('/api/auth/login').send(testAuthLogin);

    expect(response.statusCode).toEqual(404);
  });

  test('esto deberia de retornar 201', async () => {
    const response = await request(app).post('/api/auth/register').send(testAuthRegister);

    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty('data');
  });

  test('esto deberia de retornar password no valido 401', async () => {
    const newTestAuthLogin = { ...testAuthLogin, password: '22222222' };
    const response = await request(app).post('/api/auth/login').send(newTestAuthLogin);

    expect(response.statusCode).toEqual(401);
  });

  test('esto deberia de retornar 200 login exitoso', async () => {
    const response = await request(app).post('/api/auth/login').send(testAuthRegister);

    expect(response.statusCode).toEqual(200);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
});
