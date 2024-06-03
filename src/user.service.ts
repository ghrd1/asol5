import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { User, Prisma } from '../my-prisma-project/node_modules/@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async getUserById(userId: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }

  async getUserByLoginAndPassword(login: string, password: string): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        login,
        password,
      },
    });
  }
}
