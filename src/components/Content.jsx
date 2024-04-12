import styles from "./Content.module.scss";
import Recipe from "./Recipe";
import { data } from "../data/recipe.js";

function Content() {
  const recipes = data;

  return (
    <div className="flex-fill container p-20">
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
      <div className={`card p-20 ${styles.contentCard}`}>
        <div className={styles.grid}>
          {recipes.map(r => (
            <Recipe key={r._id} title={r.title} image={r.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
