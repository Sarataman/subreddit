import {
  SEARCH_POST_SUCCESS,
  SEARCH_POST_LOADING,
  SEARCH_POST_FAIL,
} from "../actions";

export const defaultSearchState = {
  posts: [],
  errorMessage: "",
  loading: false,
};

export const search = (state = defaultSearchState, action) => {
  const type = action.type;
  switch (type) {
    case SEARCH_POST_SUCCESS:
      return { posts: action.payload.posts };

    case SEARCH_POST_FAIL:
      return { ...state, errorMessage: action.payload.errorMessage };

    case SEARCH_POST_LOADING:
      return { ...state, loading: true };

    default:
      return state;
  }
};
