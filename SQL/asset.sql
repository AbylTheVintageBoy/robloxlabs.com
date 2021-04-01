CREATE SCHEMA IF NOT EXISTS `RobloxAssets` ;
CREATE TABLE IF NOT EXISTS `RobloxAssets`.`asset` (
  `Id` bigint NOT NULL AUTO_INCREMENT,
  `Name` text NOT NULL,
  `Description` text NOT NULL,
  `TypeId` bigint NOT NULL default 0,
  `Created` datetime NOT NULL DEFAULT GETUTCDATE(),
  `Updated` datetime NOT NULL DEFAULT GETUTCDATE(),
  `CreatorId` bigint NOT NULL DEFAULT 0,
  `Archived` boolean NOT NULL DEFAULT 0,
  `CreatorName` text NOT NULL default 'ROBLOX',
  `CreatorType` enum('User', 'Group', 'Other', 'Unknown') DEFAULT 'User',
  `AssetGenres` bigint NOT NULL DEFAULT 0,
  `CurrentAVID` bigint NOT NULL DEFAULT 0,
    PRIMARY KEY (`Id`),
  UNIQUE KEY `Id_UNIQUE` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;