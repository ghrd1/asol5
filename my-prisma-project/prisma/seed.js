const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    // Создание курсов
    await prisma.course.createMany({
      data: [
        {
          title: "Основы JavaScript",
          description: "Введение в язык программирования JavaScript",
          duration: "6 недель",
          price: 49.99
        },
        {
          title: "Основы React",
          description: "Изучение основных принципов библиотеки React",
          duration: "8 недель",
          price: 59.99
        },
        {
          title: "Владение Node.js",
          description: "Продвинутые концепции и лучшие практики Node.js",
          duration: "10 недель",
          price: 79.99
        },
        {
          title: "HTML и CSS для начинающих",
          description: "Основы веб-разработки с помощью HTML и CSS",
          duration: "4 недели",
          price: 39.99
        },
        {
          title: "Express.js в действии",
          description: "Практическое руководство по использованию фреймворка Express.js",
          duration: "12 недель",
          price: 89.99
        }         
      ]
    });

    // Создание пользователей
    await prisma.user.create({
      data: {
        name: "Alice",
        login: "alice123",
        password: "password123",
        completedCourses: {
          create: [{ courseId: 1 }, { courseId: 2 }]
        },
        currentCourses: {
          create: [{ courseId: 3 }]
        }
      }
    });

    await prisma.user.create({
      data: {
        name: "Bob",
        login: "bob456",
        password: "password456",
        completedCourses: {
          create: [{ courseId: 2 }]
        },
        currentCourses: {
          create: [{ courseId: 1 }, { courseId: 3 }]
        }
      }
    });

    console.log("Data seeded successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
