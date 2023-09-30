export const testAuthLogin = {
  email: 'test@test.com',
  password: '12345678',
};

export const testAuthRegister = {
  name: 'User test',
  age: 20,
  email: 'test@test.com',
  password: '12345678',
};

export const testAuthRegisterAdmin = {
  name: 'User test',
  age: 20,
  email: 'test@test.com',
  role: ['admin'],
  password: '12345678',
};

export const testStorageRegister = {
  url: 'http://localhost:3001/file-test.mp3',
  filename: 'file-test.mp3',
};

export const testDataTrack = {
  name: 'Ejemplo',
  album: 'Ejemplo',
  cover: 'http://image.com',
  artist: {
    name: 'Ejemplo',
    nickname: 'Ejemplo',
    nationality: 'VE',
  },
  duration: {
    start: 1,
    end: 3,
  },
  mediaId: '',
};
