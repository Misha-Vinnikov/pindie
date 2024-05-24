import { data } from "./data.js";

export const getNormalizedGamesDataByCategory = (category) => {
  return data.filter((game) => {
    return game.category.find((item) => {
      return item.name === category;
    });
  });
};
export const getNormalizedGamesDataById = (id) => {
  return data.find((game) => game.id === Number(id));
}