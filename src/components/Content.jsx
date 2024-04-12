import { useState } from "react";
import styles from "./Content.module.scss";
import Recipe from "./Recipe";
import { data } from "../data/recipe.js";
import { DebounceInput } from "react-debounce-input";

function Content() {
  const [dataFilter, setDataFilter] = useState("");

  function handleInput(e) {
    let value = e.target.value;
    setDataFilter(value.trim().toLowerCase());
  }

  const recipes = data;

  return (
    <div className="flex-fill container p-20">
      <h1 className="my-30">Découvrez nos nouvelles recettes !</h1>
      <div className={`card d-flex flex-column p-20 ${styles.contentCard}`}>
        <div
          className={`d-flex flex-row justify-content-center align-items-center my-30 ${styles.searchBar}`}
        >
          <i className={`fa-solid fa-magnifying-glass mr-15`}></i>
          <DebounceInput
            debounceTimeout={300}
            onChange={handleInput}
            className="flex-fill"
            name="search"
            type="text"
            placeholder="Rechercher"
          />
        </div>
        <div className={styles.grid}>
          {recipes
            .filter(r => r.title.toLowerCase().startsWith(dataFilter))
            .map(r => (
              <Recipe key={r._id} title={r.title} image={r.image} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
