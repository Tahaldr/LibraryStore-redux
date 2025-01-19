export const AJOUT_LIVRE = "AJOUT_LIVRE";
export const DELETE_LIVRE = "DELETE_LIVRE";

export const ajoutLivre = (livre) => {
  return {
    type: AJOUT_LIVRE,
    payload: livre,
  };
};

export const deleteLivre = (id) => {
  return {
    type: DELETE_LIVRE,
    payload: id,
  };
};
