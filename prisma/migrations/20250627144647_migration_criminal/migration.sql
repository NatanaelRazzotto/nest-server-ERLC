-- AlterTable
ALTER TABLE "criminal_record" ADD COLUMN     "url_image" TEXT;

-- AlterTable
ALTER TABLE "vehicle_yard_registration" ALTER COLUMN "release_date" SET DEFAULT (NOW() + INTERVAL '1 day');
