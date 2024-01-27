import { Request, Response } from 'express';

import { handleServiceResponse } from '@common/utils/responseHandler';
import { IAuthService } from '@modules/auth/authService';

export class AuthController {
  private readonly _service: IAuthService;

  constructor(service: IAuthService) {
    this._service = service;
  }

  loginUser = async (_: Request, response: Response) => {
    const serviceResponse = await this._service.login();
    handleServiceResponse(serviceResponse, response);
  };

  registerUser = async (_: Request, response: Response) => {
    const serviceResponse = await this._service.login();
    handleServiceResponse(serviceResponse, response);
  };

  logoutUser = async (_: Request, response: Response) => {
    const serviceResponse = await this._service.login();
    handleServiceResponse(serviceResponse, response);
  };
}
