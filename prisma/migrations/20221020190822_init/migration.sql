-- CreateTable
CREATE TABLE `Wallet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `driverId` INTEGER NOT NULL,
    `balance` DOUBLE NOT NULL,
    `accStatus` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transaction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `transDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `transMedium` VARCHAR(191) NOT NULL,
    `transType` VARCHAR(191) NOT NULL,
    `transAmount` DOUBLE NOT NULL,
    `walletID` INTEGER NOT NULL,

    UNIQUE INDEX `Transaction_walletID_key`(`walletID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_walletID_fkey` FOREIGN KEY (`walletID`) REFERENCES `Wallet`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
