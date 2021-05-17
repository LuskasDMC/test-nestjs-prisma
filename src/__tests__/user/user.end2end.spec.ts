import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { UsersModule } from '../../modules/user/users.module';
import generateUser from './utils/generate-user';

describe('Cats', () => {
  let app: INestApplication;
  const catsService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [UsersModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET users`, () => {
    return request(app.getHttpServer()).get('/users').expect(200).expect({
      data: generateUser(),
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
