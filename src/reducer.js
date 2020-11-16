export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   remove after finished developing
  // token: "BQAFlnAq9TeB0BGEZ3Kn4gKHbS-7R3F-C0gDExgQ2G04YhTp4pMHV7Apzp-OR9tfqz3BMxW67O2FgRE324x3dN1JmRSqFEXvk8Jt4SSyBBsLYN1m13WF3quOSyNhPO1Am2XhnytGpcg6GcAM31-uDQDx9DbaXd07fyqCwJ9lErZX87bY",
};

const reducer = (state, action) => {
  console.log("action", action);

  // Action has a type and a payload

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    default:
      return state;
  }
};
export default reducer;