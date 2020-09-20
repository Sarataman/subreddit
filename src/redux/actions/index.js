export const SEARCH_POST_SUCCESS = "SEARCH_POST_SUCCESS";
export const SEARCH_POST_FAIL = "SEARCH_POST_FAIL";
export const SEARCH_POST_LOADING = "SEARCH_POST_LOADING";

export const searchPost = (text, mostToLeastUpVotes = true, posts = []) => {
  console.log("POSTS, ", posts);
  return (dispatch) => {
    dispatch(searchPostLoading());
    if (posts.length > 0) {
      processPosts(dispatch, text, mostToLeastUpVotes, posts);
    } else {
      fetch(`https://www.reddit.com/.json?q=${text}`)
        .then((res) => res.json())
        .then((data) => {
          const posts = data.data.children.map((data) => data.data);
          processPosts(dispatch, text, mostToLeastUpVotes, posts);
        })
        .catch((err) => {
          console.error(err);
          dispatch(searchPostFail(err.message));
        });
    }
  };
};

const processPosts = (dispatch, text, mostToLeastUpVotes, posts = []) => {
  console.log("POSTS-> ", posts);
  const searchResults = posts.filter((item) => {
    return findObjectValuesForText(item, text);
  });
  let sortedPosts = [];
  if (mostToLeastUpVotes) {
    sortedPosts = sortListDescending(searchResults, "ups");
  } else {
    sortedPosts = sortListAscending(searchResults, "ups");
  }
  console.log("SORTED POSTS-> ", sortedPosts);
  dispatch(searchPostSuccess(sortedPosts));
};

const findObjectValuesForText = (obj, text) => {
  const values = Object.values(obj);
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    console.log("VALUE ", value);
    if (typeof value === "string") {
      console.log("VALUE ", value);
      if (value.toLowerCase().includes(text.toLowerCase())) {
        return true;
      }
    }
  }
  return false;
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
