-- CreateTable
CREATE TABLE "Hunter" (
    "userId" STRING NOT NULL,
    "residencyStateId" STRING,

    CONSTRAINT "Hunter_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "State" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MontanaHunter" (
    "userId" STRING NOT NULL,
    "preferencePoints" INT4,
    "deerBonusPoints" INT4,
    "elkBonusPoints" INT4,
    "pronghornBonusPoints" INT4,

    CONSTRAINT "MontanaHunter_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "State_name_key" ON "State"("name");

-- AddForeignKey
ALTER TABLE "Hunter" ADD CONSTRAINT "Hunter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MontanaHunter" ADD CONSTRAINT "MontanaHunter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Hunter"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
