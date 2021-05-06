/* This is where the App will allow to work */

// Details at initial state

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // discover_weekly: null,

  //Remove after finished devlopping
  // token: null,
};

// manupulation the state using reducer action
const reducer = (state, action) => {
  //using console.log foraction will helps in debugging the error
  console.log(action);

  //Action will take 2 parameter -> 1.type, [payload]

  switch (action.type) {
    case 'SET_USER':
      //we are updatin the user hence case is set as SET_USER
      return {
        ...state,
        user: action.user,
        //using spread operation is importent to retain previously present data in the sate
      };

    //we are updatin the Token hence case is set as SET_TOKEN
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    // Passing Playlists data from APP.js
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };

    //Passing Discover_weekly data from App.js
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
    //alwayes use default sate
  }
};

export default reducer;
