import { Role } from '../interfaces';

export class CreateUserDto {
  name: string;
  role?: Role;
}
