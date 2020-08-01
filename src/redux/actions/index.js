export const SEARCH_POST_SUCCESS = "SEARCH_POST_SUCCESS";
export const SEARCH_POST_FAIL = "SEARCH_POST_FAIL";
export const SEARCH_POST_LOADING = "SEARCH_POST_LOADING";

export const searchPost = (text) => {
  return (dispatch) => {
    dispatch(searchPostLoading());
    fetch("https://www.reddit.com/.json")
      .query({ q: text })
      .then((res) => res.json())
      .then((data) => {
        const posts = data.children.data.map((data) => data.data);
        dispatch(searchPostSuccess(posts));
      })
      .catch((err) => {
        dispatch(searchPostFail(err.message));
      });
  };
};

const searchPostSuccess = (posts) => {
  return {
    type: SEARCH_POST_SUCCESS,
    payload: {
      posts,
    },
  };
};

const searchPostLoading = () => {
  return {
    type: SEARCH_POST_LOADING,
  };
};

const searchPostFail = (errorMessage) => {
  return {
    type: SEARCH_POST_FAIL,
    payload: {
      errorMessage,
    },
  };
};