/*
  Warnings:

  - The primary key for the `UsersOnCompletedCourses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UsersOnCurrentCourses` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "UsersOnCompletedCourses" DROP CONSTRAINT "UsersOnCompletedCourses_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "UsersOnCompletedCourses_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "UsersOnCurrentCourses" DROP CONSTRAINT "UsersOnCurrentCourses_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "UsersOnCurrentCourses_pkey" PRIMARY KEY ("id");
