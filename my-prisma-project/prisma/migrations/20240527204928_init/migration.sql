-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "duration" TEXT,
    "price" DOUBLE PRECISION,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);
