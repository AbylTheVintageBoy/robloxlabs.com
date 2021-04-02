declare namespace Roblox.Platform.Assets {
	interface IAsset {
		public TypeId: System.Int32;
		public Name: System.String;
		public Description: System.String;
		public CreatorType: Roblox.Platform.Core.CreatorType;
		public CreatorTargetId: System.Int64;
		public AssetGenres: System.Int64;
		public Archived: Roblox.Platform.SQLBoolean;
		public Updated: System.DateTime;
		public Created: System.DateTime;

		public Id: System.Int64;
		public CurrentAVID: System.Int64; // just a thing to help get the asset.
	}
}