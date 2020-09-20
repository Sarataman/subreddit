import { trackPromise } from 'react-promise-tracker';
export const SEARCH_POST_SUCCESS = "SEARCH_POST_SUCCESS";
export const SEARCH_POST_FAIL = "SEARCH_POST_FAIL";
export const SEARCH_POST_LOADING = "SEARCH_POST_LOADING";

export const searchPost = (text, mostToLeastUpVotes = true) => {
  return (dispatch) => {
    dispatch(searchPostLoading())
    trackPromise(
      fetch(`https://www.reddit.com/.json?q=${text}`)
        .then((res) => res.json())
        .then((data) => {
          const posts = data.data.children.map((data) => data.data);
          console.log("POSTS-> ", posts);
          let sortedPosts = [];
          if (mostToLeastUpVotes) {
            sortedPosts = sortListDescending(posts, "ups");
          } else {
            sortedPosts = sortListAscending(posts, "ups");
          }
          console.log("SORTED POSTS-> ", sortedPosts);
          dispatch(searchPostSuccess(sortedPosts));
        })
        .catch((err) => {
          console.error(err);
          dispatch(searchPostFail(err.message));
        }));
  };
};

const sortListAscending = (list, key) => {
  return list.sort((a, b) => {
    return a[key] - b[key];
  });
};

const sortListDescending = (list, key) => {
  return list.sort((a, b) => {
    return b[key] - a[key];
  });
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
