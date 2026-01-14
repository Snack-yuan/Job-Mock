import { TabLayout } from "@/components/TabLayout";
import { HomePage } from "@/pages/index/HomePage";
import { Post } from "@/types";
import Taro from "@tarojs/taro";

export default function Index() {
  const handlePostClick = (post: Post) => {
    // Handle post click
    Taro.navigateTo({
      url: `/pages/postDetail/PostDetail?postId=${post.id}`,
    });
  };

  const handleCreatePost = () => {
    // Handle create post
    Taro.navigateTo({
      url: `/pages/postDetail/PostDetail`,
    });
  };

  return (
    <TabLayout>
      <HomePage onPostClick={handlePostClick} onCreatePost={handleCreatePost} />
    </TabLayout>
  );
}
