import { useContext } from "react";
import { appPageContext } from "../../App";
import { QUESTS_COUNT } from "../../constants/page.constants";
import "./Home.scss";

export default function Home() {
  const { setCurrentPage } = useContext(appPageContext);
  const quests = Array(QUESTS_COUNT)
    .fill(null)
    .map((_, index) => (
      <li key={"quest-listitem-" + index}>
        <button
          className="quest-listitem"
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      </li>
    ));

  return (
    <main className="main-content">
      <section className="main-section">
        <p>
          Üdvözlégy ebben a segédprogramban, ami a The Crew nevű kártyajátékhoz
          készült. A segítségével logbook nélkül is generálhatsz magatoknak
          küldetéseket. A használathoz és a játékhoz kénytelen leszel megvenni
          az alap társasjátékot, de annak bármely változatát.
        </p>
      </section>
      <section className="main-section">
        <h2>Küldetések</h2>
        <p>Válassz küldetést:</p>

        <ul className="quest-list">{quests}</ul>
      </section>
    </main>
  );
}
