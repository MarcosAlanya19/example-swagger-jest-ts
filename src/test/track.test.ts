import request from 'supertest';
import { app } from '../app';
import { Storage, Track, User } from '../models';
import { tokenSign } from '../utils/handleJwt';
import { testAuthRegisterAdmin, testDataTrack, testStorageRegister } from './helper/helperData';
import mongoose from 'mongoose';

let STORAGE_ID = "";
let JWT_TOKEN = "";

beforeAll(async () => {
  await User.deleteMany({});
  await Storage.deleteMany({});
  const user = await User.create(testAuthRegisterAdmin);
  const storage = await Storage.create(testStorageRegister);
  STORAGE_ID = storage._id.toString();
  JWT_TOKEN = tokenSign(user);
});

test("deberia registra un item", async () => {
  const dataTracksNew = {
    ...testDataTrack,
    mediaId: STORAGE_ID };

  const res = await request(app)
    .post("/api/tracks")
    .set("Authorization", `Bearer ${JWT_TOKEN}`)
    .send(dataTracksNew);
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  expect(body).toHaveProperty("data");
  expect(body).toHaveProperty("data.name");
  expect(body).toHaveProperty("data.artist");
  expect(body).toHaveProperty("data.cover");
});

test("should create a return all", async () => {
  const res = await request(app)
    .get("/api/tracks")
    .set("Authorization", `Bearer ${JWT_TOKEN}`);
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  const { data } = body;
  //   idFile = data.docs[0]._id;
  expect(body).toHaveProperty("data");
});

test("debe retornar todo el detalle del item", async () => {
  const track = await Track.findOne({});
  const id = track?._id.toString() || '';
  const res = await request(app)
    .get(`/api/tracks/${id}`)
    .set("Authorization", `Bearer ${JWT_TOKEN}`);
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  expect(body).toHaveProperty("data");
});

test("debe eliminar el item", async () => {
  const track = await Track.findOne({});
  const id = track?._id.toString() ?? '';
  const res = await request(app)
    .delete(`/api/tracks/${id}`)
    .set("Authorization", `Bearer ${JWT_TOKEN}`);
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  expect(body).toHaveProperty("data");
  expect(body).toHaveProperty("data.deleted", 1);
});


afterAll(async () => {
  await mongoose.connection.close();
});
