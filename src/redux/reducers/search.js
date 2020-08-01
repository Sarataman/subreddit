import { SEARCH_ACTION } from "../actions";

export const defaultSearchState = {
  posts: [],
};

export const searchPost = (state = defaultSearchState, action) => {
  const type = action.type;
  switch (type) {
    case SEARCH_ACTION:
  }
};
