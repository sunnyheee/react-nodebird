export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "sunny",
      },
      content: "The first content #hashtag #good",
      Images: [
        {
          src: "https://cdn.eyesmag.com/content/uploads/posts/2023/03/22/national-puppy-day-naver-maps-bde547c7-3b4d-4dce-b875-3baf72a7d291.jpg",
        },
        {
          src: "https://img.khan.co.kr/news/2019/11/29/l_2019112901003607500286631.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "mitsu",
          },
          content: "I like dog",
        },
        {
          User: {
            nickname: "kami",
          },
          content: "Me too",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "This is dummy post",
  User: {
    id: 1,
    nickname: "sunny",
  },
  images: [],
  Comments: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
