import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Course } from '../my-prisma-project/node_modules/@prisma/client';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}

  async getCourses(): Promise<Course[]> {
    return this.prisma.course.findMany();
  }

  async getCurrentCourses(userId: number): Promise<Course[]> {
    return this.prisma.course.findMany({
      where: {
        currentBy: {
          some: {
            userId: userId,
          },
        },
      },
    });
  }

  async getCompletedCourses(userId: number): Promise<Course[]> {
    return this.prisma.course.findMany({
      where: {
        completedBy: {
          some: {
            userId: userId,
          },
        },
      },
    });
  }

  async getTopCourses(count: number): Promise<Course[]> {
    const allCourses = await this.getCourses();
    return allCourses.slice(0, count);
  }
}
