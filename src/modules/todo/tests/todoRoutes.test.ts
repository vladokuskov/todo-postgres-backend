import request from 'supertest';

import { ServiceResponse } from '@common/models/serviceResponse';
import { Todo } from '@modules/todo/todoModel';
import { app } from '@src/app';

describe('Todo API endpoints', () => {
  it('GET /todos - success', async () => {
    const response = await request(app).get('/todos');
    const result: ServiceResponse<Todo[]> = response.body;

    expect(response.statusCode).toEqual(200);
    expect(result.success).toBeTruthy();
    expect(result.responseObject).toBeInstanceOf(Array);

    if (result.responseObject && result.responseObject.length > 0) {
      expect(result.responseObject[0]).toHaveProperty('id');
      expect(result.responseObject[0]).toHaveProperty('name');
    }
  });
});
