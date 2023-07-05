import React, { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import Playfield from "./components/playfield/Playfield";
import { INITIAL_PAGE } from "./constants/page.constants";
import { ALL_QUEST_CARDS } from "./constants/scenario.constants";
import { DealtCard } from "./interfaces/dealt-card.interface";

export interface PageContext {
	currentPage: number;
	setCurrentPage: Function;
	allQuestCards: DealtCard[];
}

export const initialPageContext: PageContext = {
	currentPage: INITIAL_PAGE,
	setCurrentPage: () => {},
	allQuestCards: ALL_QUEST_CARDS,
};

export const appPageContext =
	React.createContext<PageContext>(initialPageContext);

function App() {
	const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
	const allQuestCards = initialPageContext.allQuestCards;
	const pageContext = { currentPage, setCurrentPage, allQuestCards };

	return (
		<React.StrictMode>
			<appPageContext.Provider value={pageContext}>
				<div className="page-container">
					<Header />
					<div className="main-container">
						{currentPage === 0 ? <Home /> : <Playfield />}
						<Navigation />
					</div>
				</div>
			</appPageContext.Provider>
		</React.StrictMode>
	);
}

export default App;
