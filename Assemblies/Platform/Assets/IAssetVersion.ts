export interface IAssetVersion {
	Id: number;
	assetId: number;
	CreatorType: Roblox.Platform.Core.CreatorType;
	CreatorTargetId: System.Int64;
	CreatingUniverseId: System.Int64;
	Created: System.DateTime;
	IsPublished: Roblox.Platform.SQLBoolean;
	Hash: string;
	AssetIdAndHash: string;
}