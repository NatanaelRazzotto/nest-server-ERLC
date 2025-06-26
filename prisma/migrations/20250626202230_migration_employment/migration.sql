-- AlterTable
ALTER TABLE "vehicle_yard_registration" ALTER COLUMN "release_date" SET DEFAULT (NOW() + INTERVAL '1 day');

-- CreateTable
CREATE TABLE "employment" (
    "id" TEXT NOT NULL,
    "natural_person_id" TEXT NOT NULL,
    "legal_person_id" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "hired_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dismissed_at" TIMESTAMP(3),

    CONSTRAINT "employment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employment_natural_person_id_legal_person_id_key" ON "employment"("natural_person_id", "legal_person_id");

-- AddForeignKey
ALTER TABLE "employment" ADD CONSTRAINT "employment_natural_person_id_fkey" FOREIGN KEY ("natural_person_id") REFERENCES "natural_person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employment" ADD CONSTRAINT "employment_legal_person_id_fkey" FOREIGN KEY ("legal_person_id") REFERENCES "legal_person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
