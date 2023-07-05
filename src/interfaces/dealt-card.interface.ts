export enum CardColor {
	Yellow = "yellow",
	Blue = "blue",
	Green = "green",
	Red = "red",
}

export type CardNumber = Range<1, 10>;

export interface DealtCard {
	readonly cardColor: CardColor;
	readonly cardNumber: CardNumber;
}

type Enumerate<
	N extends number,
	Acc extends number[] = []
> = Acc["length"] extends N
	? Acc[number]
	: Enumerate<N, [...Acc, Acc["length"]]>;

type Range<F extends number, T extends number> = Exclude<
	Enumerate<T>,
	Enumerate<F>
>;
