const stationReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "PLAY":
      if (Object.keys(state).length !== 0) {
        if (state.payload.id === payload.id) {
          return {};
        }
        // const existStation = state.station.find((x) => x.id === payload.id);
        // if (existStation) {
        //   return {};
        // }
      }
      // if (state) {
      //
      // }
      return { payload };
    default:
      return state;
  }
};

export default stationReducer;
