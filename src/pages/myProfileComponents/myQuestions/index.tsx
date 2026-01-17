import { ArrowLeft } from "lucide-react";
import { PostCard } from "@/pages/postDetail/PostCard";
import { mockPosts } from "@/pages/data/mockData";
import { onBack } from "@/utils/back";
import Taro from "@tarojs/taro";
import { Post } from "@/types";

export function MyQuestions() {
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

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-cyan-50/30 to-blue-50/20">
      {/* 顶部导航 */}
      <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 sticky top-0 z-10 shadow-lg">
        <div className="flex items-center gap-3 px-4 h-14">
          <button
            aria-label="返回"
            onClick={onBack}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/20 active:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-white">我问过的</h2>
        </div>

        <div className="px-4 pb-4">
          <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-3">
            <p className="text-sm text-white/90">
              你提出的 {myQuestions.length} 个问题
            </p>
          </div>
        </div>
      </div>

      {/* 内容列表 */}
      <div className="flex-1 overflow-y-auto">
        {myQuestions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-4">
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
    </div>
  );
}
