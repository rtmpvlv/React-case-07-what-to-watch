import {Genres} from "./constants";

export const sortedFilms = {
  [Genres.ALL_GENRES]: (films) => films,
  [Genres.COMEDIES]: (films) => films.filter((item) => item.genre === `Comedy`),
  [Genres.CRIME]: (films) => films.filter((item) => item.genre === `Crime`),
  [Genres.DOCUMENTARY]: (films) => films.filter((item) => item.genre === `Documentary`),
  [Genres.DRAMAS]: (films) => films.filter((item) => item.genre === `Drama`),
  [Genres.HORROR]: (films) => films.filter((item) => item.genre === `Horror`),
  [Genres.KIDS_AND_FAMILY]: (films) => films.filter((item) => item.genre === `Kids and Family`),
  [Genres.ROMANCE]: (films) => films.filter((item) => item.genre === `Romance`),
  [Genres.SCI_FI]: (films) => films.filter((item) => item.genre === `Sci-fi`),
  [Genres.THRILLERS]: (films) => films.filter((item) => item.genre === `Thriller`),
};
