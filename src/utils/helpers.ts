export const movieVoitesHandler = (voites: number | undefined) => {
  if(voites)
  return voites.toFixed(2);
}  