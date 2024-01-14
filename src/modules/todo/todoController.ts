import { Request, Response } from 'express';

import { handleServiceResponse } from '@common/utils/responseHandler';
import { ITodoService } from '@modules/todo/todoService';

export class TodoController {
  private readonly _service: ITodoService;

  constructor(service: ITodoService) {
    this._service = service;
  }

  getAllTodos = async (_: Request, response: Response) => {
    const serviceResponse = await this._service.findAll();
    handleServiceResponse(serviceResponse, response);
  };
}
