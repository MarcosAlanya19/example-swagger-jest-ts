import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../app';
import { Storage, User } from '../models';
import { tokenSign } from '../utils/handleJwt';
import { testAuthRegister } from './helper/helperData';

let JWT_TOKEN = '';
const filePath = `${__dirname}/dump/track.mp3`;

beforeAll(async () => {
  await User.deleteMany({});
  await Storage.deleteMany();
  const user = User.create(testAuthRegister);
  JWT_TOKEN = tokenSign(user);
});

describe('[STORAGE] esta es la prueba de /api/storage', () => {
  test('should uplaod file', async () => {
    const res = await request(app).post('/api/storage').set('Authorization', `Bearer ${JWT_TOKEN}`).attach('myfile', filePath);
    const { body } = res;
    expect(res.statusCode).toEqual(201);
    expect(body).toHaveProperty('data');
    expect(body).toHaveProperty('data.url');
  });

  test('should create a return all', async () => {
    const res = await request(app).get('/api/storage').set('Authorization', `Bearer ${JWT_TOKEN}`);
    const { body } = res;
    expect(res.statusCode).toEqual(200);
    const { data } = body;
    expect(body).toHaveProperty('data');
  });

  describe('[STORAGE] Return  one file', () => {
    let id = '';
    test('deberia retornar un solo item', async () => {
      const storage = await Storage.findOne();
      id = storage?._id.toString() || '';
    });
    test('Debe dretornar toeo el detalle del item', async () => {
      const res = await request(app).get(`/api/storage/${id}`).set('Authorization', `Bearer ${JWT_TOKEN}`);
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
});
