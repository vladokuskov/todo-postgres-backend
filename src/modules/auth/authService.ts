import { User } from '@db/entities/User';
import { queryRunner } from '@db/queryRunner';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as process from 'process';

import { ServiceResponse } from '@common/models/serviceResponse';
import { logger } from '@src/app';

export interface IAuthService {
  login(email?: string, password?: string): Promise<ServiceResponse<any | null>>;
  register({
    email,
    password,
    username,
  }: {
    email?: string;
    password?: string;
    username?: string;
  }): Promise<ServiceResponse<any | null>>;
  logout(): Promise<ServiceResponse<any[] | null>>;
}

export class AuthService {
  private SECRET_JWT_KEY = process.env.SECRET_JWT_KEY as string;

  public async login(email?: string, password?: string) {
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

  public async register({ email, password, username }: { email?: string; password?: string; username?: string }) {
    try {
      if (!email || !password) {
        return new ServiceResponse(false, 'Email and password are required', []);
      }

      const existingUser = await queryRunner.users.findOne({ where: { email } });

      if (existingUser) {
        return new ServiceResponse(false, 'User with this email already exists', []);
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User();
      user.email = email;
      user.password = hashedPassword;
      user.username = username ? username : 'User';

      await queryRunner.users.save(user);

      const token = jwt.sign({ id: user.id }, this.SECRET_JWT_KEY, {
        expiresIn: '7d',
      });

      return new ServiceResponse<any>(true, 'Signed up in successfully.', { token });
    } catch (err) {
      logger.error(err);
      return new ServiceResponse<any[]>(false, 'Signed up unsuccessfully.', []);
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
