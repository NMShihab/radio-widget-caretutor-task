export const playAction = (station) => {
  return (dispatch) => {
    dispatch({
      type: "PLAY",
      payload: station,
    });
  };
};
