/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsersOnCompletedCourses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsersOnCurrentCourses` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UsersOnCompletedCourses" DROP CONSTRAINT "UsersOnCompletedCourses_courseId_fkey";

-- DropForeignKey
ALTER TABLE "UsersOnCompletedCourses" DROP CONSTRAINT "UsersOnCompletedCourses_userId_fkey";

-- DropForeignKey
ALTER TABLE "UsersOnCurrentCourses" DROP CONSTRAINT "UsersOnCurrentCourses_courseId_fkey";

-- DropForeignKey
ALTER TABLE "UsersOnCurrentCourses" DROP CONSTRAINT "UsersOnCurrentCourses_userId_fkey";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "UsersOnCompletedCourses";

-- DropTable
DROP TABLE "UsersOnCurrentCourses";
