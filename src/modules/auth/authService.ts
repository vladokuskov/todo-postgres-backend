import { queryRunner } from '@db/queryRunner';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as process from 'process';

import { ServiceResponse } from '@common/models/serviceResponse';
import { logger } from '@src/app';

export interface IAuthService {
  login(email: string | null, password: string | null): Promise<ServiceResponse<any | null>>;
  register(): Promise<ServiceResponse<any[] | null>>;
  logout(): Promise<ServiceResponse<any[] | null>>;
}

export class AuthService implements IAuthService {
  private SECRET_JWT_KEY = process.env.SECRET_JWT_KEY as string;

  public async login(email: string | null, password: string | null) {
    try {
      if (!email || !password) {
        return new ServiceResponse(false, 'Email and password are required', []);
      }

      const existingUser = await queryRunner.users.findOne({ where: { email } });

      if (!existingUser) {
        return new ServiceResponse(false, 'User not found', []);
      }

      const isPasswordValid = await bcrypt.compare(password, existingUser.password);

      if (!isPasswordValid) {
        return new ServiceResponse(false, 'Incorrect password', []);
      }

      const token = jwt.sign({ id: existingUser.id }, this.SECRET_JWT_KEY, {
        expiresIn: '7d',
      });

      return new ServiceResponse(true, 'Logged in successfully', { token });
    } catch (err) {
      logger.error(err);
      return new ServiceResponse(false, 'Failed to login', []);
    }
  }

  public async register() {
    try {
      return new ServiceResponse<any[]>(true, 'Logged in successfully.', []);
    } catch (err) {
      logger.error(err);
      return new ServiceResponse<any[]>(false, 'Logged in unsuccessfully.', []);
    }
  }

  public async logout() {
    try {
      return new ServiceResponse<any[]>(true, 'Logged in successfully.', []);
    } catch (err) {
      logger.error(err);
      return new ServiceResponse<any[]>(false, 'Logged in unsuccessfully.', []);
    }
  }
}
