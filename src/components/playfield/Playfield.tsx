import { useContext } from "react";
import { appPageContext } from "../../App";
import {
	LEVEL_INFORMATION,
	forwardTokensAsciiCodes,
	noTokenAsciiCode,
	numberTokensAsciiCodes,
	omegaTokenAsciiCode,
} from "../../constants/scenario.constants";
import "./Playfield.scss";

export default function Playfield() {
	const { currentPage } = useContext(appPageContext);
	const levelsInformation = LEVEL_INFORMATION;
	const numberTokenCount =
		levelsInformation[currentPage - 1]?.tokens?.numberTokenCount;
	const forwardTokenCount =
		levelsInformation[currentPage - 1]?.tokens?.forwardTokenCount;
	const hasOmegaToken =
		levelsInformation[currentPage - 1]?.tokens?.hasOmegaToken;

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
						<span className="quest-card-indicator">
							{levelsInformation[currentPage - 1]?.orderCardsCount || 0}
						</span>
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
					<button className="quest-start-button crew-button">
						Új leosztás
					</button>
				</section>
			) : (
				<p className="empty-quest-warning">
					Hiányzó küldetés! Keresd a Kapitányt további információkért!
				</p>
			)}
			<section className="main-section"></section>
		</main>
	);
}
