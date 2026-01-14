import { useState } from "react";
import { Search, PenSquare } from "lucide-react";
import { PostCard } from "@/pages/postDetail/PostCard";
import { emotionTags, mockPosts } from "../data/mockData";
import type { Post } from "@/types";

interface HomePageProps {
  onPostClick: (post: Post) => void;
  onCreatePost: () => void;
}

export function HomePage({ onPostClick, onCreatePost }: HomePageProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col bg-gradient-to-b from-blue-50/30 to-purple-50/20">
      {/* 顶部固定区域 */}
      <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-lg">
        {/* 问候语 */}
        <div className="px-2 pt-8 pb-5">
          <h2 className="mb-2 text-white">👋 今天求职还顺利吗？</h2>
          <p className="text-white/90 text-sm">不顺也没关系，这里有人懂你。</p>
        </div>

        {/* 搜索框 */}
        <div className="flex items-center justify-center relative p-2">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索企业 / 话题 / 你关心的问题"
            className="pl-12 py-2 w-[90%] bg-white/95 backdrop-blur rounded-2xl border-0 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg placeholder:text-gray-400"
          />
        </div>

        {/* 情绪快捷入口 */}
        <div className="px-2 pb-3 pt-3 overflow-x-auto">
          <div className="flex gap-3 min-w-max">
            {emotionTags.map((emotion) => (
              <button
                key={emotion.tag}
                className="flex items-center gap-2 px-4 py-2.5 bg-white/95 backdrop-blur hover:bg-white active:scale-95 rounded-full border border-white/50 shadow-md transition-all whitespace-nowrap"
              >
                <span className="text-sm">{emotion.emoji}</span>
                <span className="text-sm text-gray-700">{emotion.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 内容列表 */}
      <div className="flex-1 overflow-y-auto">
        {mockPosts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-2">
            <div className="text-6xl mb-4">🤔</div>
            <p className="text-gray-600 text-center mb-2">这里暂时还没有内容</p>
            <p className="text-gray-500 text-sm text-center">
              不如你来发第一条？
            </p>
          </div>
        ) : (
          <div className="bg-white shadow-sm rounded-t-3xl">
            {mockPosts.map((post) => (
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
        aria-label="创建新帖子"
        onClick={onCreatePost}
        className="fixed bottom-24 right-6 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 active:scale-95 text-white rounded-full shadow-2xl flex items-center justify-center transition-all z-40 hover:shadow-blue-500/50"
      >
        <PenSquare className="w-6 h-6" />
      </button>
      {/* 底部留白区域 */}
      <div className="h-24" />
    </div>
  );
}
