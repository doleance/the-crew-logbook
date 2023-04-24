import { useContext } from 'react';
import './Navigation.scss';
import {appPageContext} from '../../App'
import {QUESTS_COUNT} from '../../constants/page.constants';

export default function Navigation() {
  const { currentPage, setCurrentPage } = useContext(appPageContext);
  const scrollTo = (top = 0): void => window.scrollTo({ top, behavior: 'smooth' });
  const switchPage = (pageToSet: number): void => {
    if (pageToSet > QUESTS_COUNT || pageToSet < 0) {
      return;
    }
    setCurrentPage(pageToSet);
  }

  return (
    <div className="page-navigation-wrapper">
      <nav className="page-navigation">
        <button className="navigation-button arrow arrow-up" onClick={() => scrollTo(0)}></button>
        <button className="navigation-button arrow arrow-left" onClick={() => switchPage(currentPage - 1)}></button>
        <button className="navigation-button navigation-button-center" onClick={() => switchPage(0)}></button>
        <button className="navigation-button arrow arrow-right" onClick={() => switchPage(currentPage + 1)}></button>
        <button className="navigation-button arrow arrow-down" onClick={() => scrollTo(document.body.scrollHeight)}></button>
      </nav>
    </div>
  );
}
