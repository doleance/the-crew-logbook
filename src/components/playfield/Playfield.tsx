import { useContext, useEffect, useState } from "react";
import { appPageContext } from "../../App";
import {
	LEVEL_INFORMATION,
	forwardTokensAsciiCodes,
	noTokenAsciiCode,
	numberTokensAsciiCodes,
	omegaTokenAsciiCode,
} from "../../constants/scenario.constants";
import { DealtCard } from "../../interfaces/dealt-card.interface";
import { shuffleArray } from "../../utils/array.utils";
import "./Playfield.scss";

export default function Playfield() {
	const { currentPage, allQuestCards } = useContext(appPageContext);
	const [dealtCards, setDealtCards] = useState<JSX.Element[]>([]);
	useEffect(() => {
		setDealtCards([]);
	}, [currentPage]);
	const levelsInformation = LEVEL_INFORMATION;
	const orderCardsCount = levelsInformation[currentPage - 1]?.orderCardsCount;
	const numberTokenCount =
		levelsInformation[currentPage - 1]?.tokens?.numberTokenCount;
	const forwardTokenCount =
		levelsInformation[currentPage - 1]?.tokens?.forwardTokenCount;
	const hasOmegaToken =
		levelsInformation[currentPage - 1]?.tokens?.hasOmegaToken;

	const dealQuestCards = (): void => {
		setDealtCards(generateQuestCards());
		animateCards();
	};

	const generateQuestCards = (): JSX.Element[] => {
		if (!orderCardsCount) {
			return [];
		}
		const shuffledQuestCards = shuffleArray(allQuestCards).slice(
			0,
			orderCardsCount
		);
		return shuffledQuestCards.map((card: DealtCard) => (
			<li
				className={"playing-card playing-card--" + card.cardColor}
				key={"playing-card-" + crypto.randomUUID()}
			>
				<span>{card.cardNumber}</span>
			</li>
		));
	};

	const animateCards = (): void => {
		const playground = document.getElementsByClassName(
			"playing-cards-wrapper"
		)[0];
		playground.classList.remove("animated");
		setTimeout(() => playground.classList.add("animated"), 100);
	};

	return (
		<main className="main-content">
			<section className="main-section">
				<h2 className="main-section-header">
					<span className="quest-listitem">{currentPage}.</span> küldetés
				</h2>
				<div
					className="quest-description"
					dangerouslySetInnerHTML={{
						__html: levelsInformation[currentPage - 1]?.description,
					}}
				></div>
			</section>
			{levelsInformation?.length ? (
				<section className="main-section quest-indicator-section">
					<p className="order-cards-wrapper">
						Célkártyák száma:{" "}
						<span className="quest-card-indicator">{orderCardsCount || 0}</span>
					</p>
					<div>
						<p className="order-tokens-wrapper">Tokenek:</p>
						<ul className="quest-token-list">
							{!!numberTokenCount &&
								[...Array(numberTokenCount).keys()].map((numberToken) => (
									<li
										className="quest-token-indicator"
										key={"order-token-" + numberTokensAsciiCodes[numberToken]}
									>
										{String.fromCharCode(numberTokensAsciiCodes[numberToken])}
									</li>
								))}
							{!!forwardTokenCount &&
								[...Array(forwardTokenCount).keys()].map((forwardToken) => (
									<li
										className="quest-token-indicator"
										key={"order-token-" + forwardTokensAsciiCodes[forwardToken]}
									>
										{String.fromCharCode(forwardTokensAsciiCodes[forwardToken])}
									</li>
								))}
							{hasOmegaToken && (
								<li
									className="quest-token-indicator"
									key={"order-token-" + omegaTokenAsciiCode}
								>
									{String.fromCharCode(omegaTokenAsciiCode)}
								</li>
							)}
							{!numberTokenCount &&
								!forwardTokenCount &&
								!hasOmegaToken &&
								String.fromCharCode(noTokenAsciiCode)}
						</ul>
					</div>
					<button
						className="quest-start-button crew-button"
						onClick={() => dealQuestCards()}
					>
						Új leosztás
					</button>
				</section>
			) : (
				<p className="empty-quest-warning">
					Hiányzó küldetés! Keresd a Kapitányt további információkért!
				</p>
			)}
			<section className="main-section quest-goal-section">
				<ul className="playing-cards-wrapper">{dealtCards}</ul>
			</section>
		</main>
	);
}
