import { User } from '@entities/User';

import { ServiceResponse } from '@common/models/serviceResponse';
import { logger } from '@src/app';
import { queryRunner } from '@src/shared/queryRunner';

export interface IAuthService {
  login(): Promise<ServiceResponse<any[] | null>>;
  register(): Promise<ServiceResponse<any[] | null>>;
  logout(): Promise<ServiceResponse<any[] | null>>;
}

export class AuthService implements IAuthService {
  public async login() {
    try {
      const user = queryRunner.users.create(new User());
      user.email = 'advance11ua@gmail.com';
      user.name = '123';
      await queryRunner.users.save(user);
      return new ServiceResponse<any[]>(true, 'Logged in successfully.', []);
    } catch (err) {
      logger.error(err);
      return new ServiceResponse<any[]>(false, 'Logged in unsuccessfully.', []);
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
