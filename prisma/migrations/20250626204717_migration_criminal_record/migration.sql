-- AlterTable
ALTER TABLE "vehicle_yard_registration" ALTER COLUMN "release_date" SET DEFAULT (NOW() + INTERVAL '1 day');

-- CreateTable
CREATE TABLE "criminal_record" (
    "id" TEXT NOT NULL,
    "description_situation" TEXT NOT NULL,
    "coast" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "time_of_confinement" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "payment_pending" BOOLEAN NOT NULL DEFAULT true,
    "offender_Id" TEXT,
    "author_record_Id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "criminal_record_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "criminal_record" ADD CONSTRAINT "criminal_record_offender_Id_fkey" FOREIGN KEY ("offender_Id") REFERENCES "natural_person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "criminal_record" ADD CONSTRAINT "criminal_record_author_record_Id_fkey" FOREIGN KEY ("author_record_Id") REFERENCES "natural_person"("id") ON DELETE SET NULL ON UPDATE CASCADE;
