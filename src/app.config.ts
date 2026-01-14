export default defineAppConfig({
  animation: false,
  pages: [
    "pages/index/index",
    "pages/category/index",
    "pages/guide/index",
    "pages/profile/index",
    "pages/postDetail/PostDetail",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
