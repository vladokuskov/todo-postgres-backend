import { Request, Response } from 'express';

import { handleServiceResponse } from '@common/utils/responseHandler';
import { IAuthService } from '@modules/auth/authService';

export class AuthController {
  private readonly _service: IAuthService;

  constructor(service: IAuthService) {
    this._service = service;
  }

  loginUser = async (req: Request, response: Response) => {
    const { email, password } = req.body;
    const serviceResponse = await this._service.login(email, password);
    handleServiceResponse(serviceResponse, response);
  };

  registerUser = async (req: Request, response: Response) => {
    const { email, password, username } = req.body;
    const serviceResponse = await this._service.register({ email, password, username });
    handleServiceResponse(serviceResponse, response);
  };

  logoutUser = async (_: Request, response: Response) => {
    const serviceResponse = await this._service.logout();
    handleServiceResponse(serviceResponse, response);
  };
}
