import './Navigation.scss';

export default function Navigation() {
  const scrollTo = (top = 0): void => window.scrollTo({ top, behavior: 'smooth' });
  
  return (
    <div className="page-navigation-wrapper">
      <nav className="page-navigation">
        <button className="navigation-button arrow arrow-up" onClick={() => scrollTo(0)}></button>
        <button className="navigation-button arrow arrow-left"></button>
        <button className="navigation-button navigation-button-center"></button>
        <button className="navigation-button arrow arrow-right"></button>
        <button className="navigation-button arrow arrow-down" onClick={() => scrollTo(document.body.scrollHeight)}></button>
      </nav>
    </div>
  );
}
