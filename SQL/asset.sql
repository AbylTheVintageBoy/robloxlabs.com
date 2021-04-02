CREATE SCHEMA IF NOT EXISTS `RobloxAssets` ;
CREATE TABLE IF NOT EXISTS `RobloxAssets`.`asset` (
  `Id` bigint NOT NULL AUTO_INCREMENT,
  `Name` text NOT NULL,
  `Description` text NOT NULL,
  `TypeId` bigint NOT NULL default 0,
  `Created` datetime,
  `Updated` datetime,
   `CreatorTargetId` bigint NOT NULL DEFAULT 0,

  `CreatorId` bigint NOT NULL DEFAULT 0,
  `Archived` boolean NOT NULL DEFAULT 0,
  `CreatorName` text,
  `CreatorType` enum('User', 'Group', 'Other', 'Unknown') DEFAULT 'User',
  `AssetGenres` bigint NOT NULL DEFAULT 0,
  `CurrentAVID` bigint NOT NULL DEFAULT 0,
    PRIMARY KEY (`Id`),
  UNIQUE KEY `Id_UNIQUE` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `RobloxAssets`.`assetversions` (
  `Id` bigint NOT NULL AUTO_INCREMENT,
  `assetId` bigint NOT NULL,
  `CreatorId` bigint NOT NULL DEFAULT 0,
  `CreatorTargetId` bigint NOT NULL DEFAULT 0,
  `CreatorUniverseId` bigint NOT NULL DEFAULT 0,

  `CreatorType` enum('User', 'Group', 'Other', 'Unknown') DEFAULT 'User',
  `Hash` text NOT NULL,
  AssetIdAndHash text NOT NULL,
  IsPublished BOOLEAN NOT NULL DEFAULT TRUE,

    PRIMARY KEY (`Id`),
  UNIQUE KEY `Id_UNIQUE` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;