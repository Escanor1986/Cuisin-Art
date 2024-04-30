import { data } from "./recipe";

export async function seedRecipes() {
  const response = await fetch("https://restapi.fr/api/recipes");
  const recipes = await response.json();

  if (recipes.length < 20) {
    await fetch("https://restapi.fr/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}
