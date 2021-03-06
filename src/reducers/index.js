/* eslint-disable arrow-parens */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
import { actions } from "../actions";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setFavorite:
      return {
        ...state,
        mylist: [...state.mylist, action.payload]
      };
    case actions.deleteFavorite:
      return {
        ...state,
        mylist: state.mylist.filter(item => item.id !== action.payload)
      };
    case actions.loginRequest:
      return {
        ...state,
        user: action.payload
      };
    case actions.logoutRequest:
      return {
        ...state,
        user: action.payload
      };
    case actions.registerRequest:
      return {
        ...state,
        user: action.payload
      };

    case actions.getVideoSource:
      return {
        ...state,
        playing:
          state.trends.find(item => item.id === Number(action.payload)) ||
          state.originals.find(item => item.id === Number(actions.payload)) ||
          []
      };

    case actions.searchVideo:
      if (action.payload === "") {
        return {
          ...state,
          results: []
        };
      }

      return {
        ...state,
        results:
          state.trends
            .concat(state.originals)
            .filter(item =>
              item.title.toLowerCase().includes(action.payload.toLowerCase())
            ) || []
      };
    default:
      return state;
  }
};

export default reducer;
