const stationReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "PLAY":
      if (Object.keys(state).length !== 0) {
        if (state.station.id === payload.id) {
          return {};
        }
      }
      const station = payload;
      return { station };
    default:
      return state;
  }
};

export default stationReducer;
