import { ThumbsUp, MessageCircle } from "lucide-react";
import type { Post } from "@/types";

interface PostCardProps {
  post: Post;
  onClick: () => void;
}

export function PostCard({ post, onClick }: PostCardProps) {
  const getTypeLabel = (type: Post["type"]) => {
    switch (type) {
      case "rant":
        return "【吐槽】";
      case "guide":
        return "【避坑】";
      case "question":
        return "【提问】";
    }
  };

  const getTypeBadgeColor = (type: Post["type"]) => {
    switch (type) {
      case "rant":
        return "bg-gradient-to-r from-red-500 to-pink-500 text-white";
      case "guide":
        return "bg-gradient-to-r from-amber-500 to-orange-500 text-white";
      case "question":
        return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white";
    }
  };

  return (
    <div
      onClick={onClick}
      className="bg-white p-5 border-b border-gray-100 hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-50/30 active:from-gray-100 active:to-blue-100/50 transition-all duration-200 cursor-pointer group"
    >
      {/* 标签 */}
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`text-xs px-3 py-1.5 rounded-full shadow-sm ${getTypeBadgeColor(
            post.type
          )}`}
        >
          {getTypeLabel(post.type)}
        </span>
        {post.company && (
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            @{post.company}
          </span>
        )}
      </div>

      {/* 标题 */}
      <h4 className="mb-3 group-hover:text-blue-600 transition-colors">
        {post.title}
      </h4>

      {/* 内容预览 */}
      <p className="text-gray-600 text-sm line-clamp-2 mb-4 leading-relaxed">
        {post.content}
      </p>

      {/* 标签 */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 border border-purple-100"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* 底部信息 */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-1.5">
          <span className="text-gray-700">{post.author}</span>
          <span className="text-gray-300">·</span>
          <span>{post.timestamp}</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5 text-gray-600 group-hover:text-red-500 transition-colors">
            <ThumbsUp className="w-4 h-4" />
            <span className="tabular-nums">{post.likes}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-600 group-hover:text-blue-500 transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span className="tabular-nums">{post.comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
