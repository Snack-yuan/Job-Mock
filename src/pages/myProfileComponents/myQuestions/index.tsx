import { PostCard } from "@/pages/postDetail/PostCard";
import { mockPosts } from "@/pages/data/mockData";
import { onBack } from "@/utils/back";
import Taro from "@tarojs/taro";
import { Post } from "@/types";
import { TopBarNav } from "@/components/TopBarNav";

export default function MyQuestions() {
  const onPostClick = (post: Post) => {
    // 处理帖子点击事件
    Taro.navigateTo({
      url: `/pages/postDetail/PostDetail?postId=${post.id}`,
    });
  };
  // 只显示问题类型的内容
  const myQuestions = mockPosts
    .filter((post) => post.type === "question")
    .slice(0, 3);
  const style =
    "bg-gradient-to-br text-white from-cyan-500 via-blue-500 to-indigo-500";
  const bottomSlot = (
    <div className="px-4 pb-4">
      <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-3">
        <p className="text-sm text-white/90">
          你提出的 {myQuestions.length} 个问题
        </p>
      </div>
    </div>
  );
  return (
    <TopBarNav
      onBack={onBack}
      context="我问过的"
      style={style}
      bottomSlot={bottomSlot}
    >
      {/* 内容列表 */}
      <div className="flex-1 overflow-y-auto">
        {myQuestions.length === 0 ? (
          <div className="flex flex-col shadow-xl items-center justify-center py-20 px-4">
            <div className="text-6xl mb-4">❓</div>
            <p className="text-gray-600 text-center mb-2">还没有提问记录</p>
            <p className="text-gray-500 text-sm text-center">
              遇到问题就来问大家吧
            </p>
          </div>
        ) : (
          <div className="bg-white shadow-sm rounded-t-3xl mt-2">
            {myQuestions.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onClick={() => onPostClick(post)}
              />
            ))}
          </div>
        )}
      </div>
    </TopBarNav>
  );
}
