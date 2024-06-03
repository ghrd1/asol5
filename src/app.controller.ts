import { Body, Controller, Get, Param, Post, Render, Req, Res } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateUserDto } from './createUser.dto';
import { UserService } from './user.service';
import { LoginDto } from './login.dto';

@Controller()
export class AppController {
  constructor(
    private readonly courseService: CourseService,
    private readonly userService: UserService,
  ) {}

  @Get()
  @Render('index')
  async index(@Res() res) {
    try {
      const courses = await this.courseService.getTopCourses(4);
      return { courses };
    } catch (error) {
      console.error('Error while fetching courses:', error);
      return { courses: [], error: 'Failed to fetch courses' };
    }
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() res) {
    const user = await this.userService.getUserByLoginAndPassword(loginDto.login, loginDto.password);
    if (user) {
      res.cookie('userId', user.id); 
      return res.status(200).json({ userId: user.id });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  }

  @Get('profile/:id')
  @Render('Profile')
  async profile(@Param('id') id: string) {
    const userId = parseInt(id, 10); 
    const user = await this.userService.getUserById(userId);
    if (user) {
      const currentCourses = await this.courseService.getCurrentCourses(userId);
      const completedCourses = await this.courseService.getCompletedCourses(userId);

      return { user: { ...user, currentCourses, completedCourses } };
    } else {
      return { error: 'User not found' };
    }
  }

  @Get('logout')
  async logout(@Res() res) {
    res.clearCookie('userId');
    return res.redirect('/');
  }

  @Get('course')
  @Render('course')
  async course() {
    try {
      const courses = await this.courseService.getCourses();
      return { courses };
    } catch (error) {
      console.error('Error while fetching courses:', error);
      return { courses: [], error: 'Failed to fetch courses' };
    }
  }

  @Post('register')
  async register(@Body() CreateUserDto: CreateUserDto, @Res() res) {
    try {
      const newUser = await this.userService.createUser(CreateUserDto);
      return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error('Error while registering user:', error);
      return res.status(500).json({ message: 'Failed to register user' });
    }
  }
}
