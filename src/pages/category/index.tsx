import { useState } from "react";
import { PenSquare } from "lucide-react";
import { PostCard } from "@/pages/postDetail/PostCard";
import { hotTopics, mockPosts } from "@/pages/data/mockData";
import type { Post } from "@/types";
import { TabLayout } from "@/components/TabLayout";
import Taro from "@tarojs/taro";

export default function RantPage() {
  const [activeTag, setActiveTag] = useState("hot");

  // 只显示吐槽类型的内容
  const rantPosts = mockPosts.filter((post) => post.type === "rant");

  const onPostClick = (post: Post) => {
    // 处理帖子点击事件
    Taro.navigateTo({
      url: `/pages/postDetail/PostDetail?postId=${post.id}`,
    });
  };

  const handleCreatePost = () => {
    // 处理创建帖子事件
    Taro.navigateTo({
      url: `/pages/createPost/index`,
    });
  };

  return (
    <TabLayout>
      <div className="flex flex-col h-full bg-gradient-to-b from-red-50/30 to-pink-50/20">
        {/* 顶部固定区域 */}
        <div className="bg-gradient-to-br from-red-500 via-pink-500 to-rose-500 shadow-lg">
          {/* 标题 */}
          <div className="px-2 pt-8 pl-5 pb-5">
            <h2 className="text-white">吐槽广场</h2>
            <p className="text-white/90 text-sm mt-1">
              一起说说那些让人无语的事
            </p>
          </div>

          {/* 话题标签 */}
          <div className="px-2 pb-3 pt-3 overflow-x-auto">
            <div className="flex gap-3 min-w-max">
              {hotTopics.map((topic) => (
                <button
                  key={topic.tag}
                  onClick={() => setActiveTag(topic.tag)}
                  className={`flex items-center gap-2 border-none ring-1 ring-gray-100 px-4 py-2.5 rounded-full transition-all whitespace-nowrap shadow-md active:scale-95 ${
                    activeTag === topic.tag
                      ? "bg-white text-red-600 border-white scale-105"
                      : "bg-white/20 backdrop-blur text-white border-white/30 hover:bg-white/30"
                  }`}
                >
                  <span className="text-sm">{topic.emoji}</span>
                  <span className="text-sm">{topic.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 内容列表 */}
        <div className="flex-1 overflow-y-auto">
          {rantPosts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 px-2">
              <div className="text-6xl mb-4">😶</div>
              <p className="text-gray-600 text-center mb-2">
                这个分类还没有内容
              </p>
              <p className="text-gray-500 text-sm text-center">
                来发第一条吐槽吧
              </p>
            </div>
          ) : (
            <div className="bg-white shadow-sm rounded-t-3xl mt-2">
              {rantPosts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  onClick={() => onPostClick(post)}
                />
              ))}
            </div>
          )}
        </div>

        {/* 浮动发布按钮 */}
        <button
          aria-label="发布吐槽"
          onClick={handleCreatePost}
          className="fixed bottom-24 border-none right-6 w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 active:scale-95 text-white rounded-full shadow-2xl flex items-center justify-center transition-all z-40 hover:shadow-red-500/50"
        >
          <PenSquare className="w-6 h-6" />
        </button>
        {/* 底部留白区域 */}
        <div className="h-24" />
      </div>
    </TabLayout>
  );
}
