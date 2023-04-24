export interface LevelInformation {
	readonly levelNumber: number;
	readonly description: string;
	readonly orderCardsCount?: number;
	readonly tokens?: TokenInformation;
}

export interface TokenInformation {
	readonly numberTokenCount?: number;
	readonly forwardTokenCount?: number;
	readonly hasOmegaToken?: boolean;
}
