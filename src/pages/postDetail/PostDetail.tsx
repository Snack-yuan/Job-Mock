import { useEffect, useState } from "react";
import { ArrowLeft, ThumbsUp, MessageCircle, Share2, Flag } from "lucide-react";
import { mockPosts, quickReplies } from "../data/mockData";
import type { Post } from "@/types";
import Taro from "@tarojs/taro";

export default function PostDetail() {
  const [comment, setComment] = useState("");
  const [liked, setLiked] = useState(false);

  const onBack = () => {
    Taro.navigateBack();
  };
  const mockComments = [
    {
      id: "1",
      author: "匿名求职人",
      content: "我也遇到过同样的情况，真的很崩溃",
      timestamp: "1小时前",
      likes: 23,
    },
    {
      id: "2",
      author: "过来人",
      content: "这种公司直接拉黑，不值得浪费时间",
      timestamp: "2小时前",
      likes: 45,
    },
    {
      id: "3",
      author: "匿名求职人",
      content: "抱抱你，求职不易，加油！",
      timestamp: "3小时前",
      likes: 12,
    },
  ];

  const handleQuickReply = (reply: string) => {
    setComment(reply);
  };

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

  const router = Taro.getCurrentInstance().router;
  const postId = router?.params?.postId;

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (postId) {
      const found = mockPosts.find((p) => p.id === postId);
      setPost(found || null);
    }
  }, [postId]);

  if (!post) {
    return <div className="p-4">加载中...</div>;
  }

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* 顶部导航 */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-3 px-4 h-14">
          <button
            aria-label="返回上一页"
            onClick={onBack}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2>详情</h2>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="flex-1 overflow-y-auto pb-20">
        {/* 帖子详情 */}
        <div className="bg-white p-5 border-b-8 border-gray-100">
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
              <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded">
                @{post.company}
              </span>
            )}
          </div>

          {/* 标题 */}
          <h2 className="mb-4">{post.title}</h2>

          {/* 内容 */}
          <p className="text-gray-700 mb-5 leading-relaxed">{post.content}</p>

          {/* 标签 */}
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 border border-purple-100"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* 作者信息 */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-5 pb-5 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <span className="text-gray-700">{post.author}</span>
              <span className="text-gray-300">·</span>
              <span>{post.timestamp}</span>
            </div>
            {post.type === "question" && (
              <span className="text-xs text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                已有 {post.comments} 位求职人看过
              </span>
            )}
          </div>

          {/* 互动按钮 */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full border-2 transition-all ${
                liked
                  ? "border-red-500 bg-gradient-to-r from-red-50 to-pink-50 text-red-600 scale-105"
                  : "border-gray-200 hover:border-red-300 hover:bg-red-50/50"
              }`}
            >
              <ThumbsUp className="w-4 h-4" />
              <span className="text-sm">
                我懂你 {post.likes + (liked ? 1 : 0)}
              </span>
            </button>
            <button className="flex items-center gap-2 px-5 py-3 rounded-full border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">一起说</span>
            </button>
            <button
              aria-label="分享此帖子"
              className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50/50 transition-all"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 快捷回复 */}
        <div className="bg-white p-4 border-b border-gray-100">
          <p className="text-sm text-gray-600 mb-3">快速回复</p>
          <div className="flex flex-wrap gap-2">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => handleQuickReply(reply)}
                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 active:scale-95 rounded-full text-sm text-gray-700 border border-blue-100 transition-all"
              >
                {reply}
              </button>
            ))}
          </div>
        </div>

        {/* 评论列表 */}
        <div className="bg-white">
          <div className="px-5 py-4 border-b border-gray-100">
            <h3 className="flex items-center gap-2">
              评论
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                {mockComments.length}
              </span>
            </h3>
          </div>

          {mockComments.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="text-5xl mb-3">💬</div>
              <p className="text-gray-600 text-sm mb-1">还没有回答</p>
              <p className="text-gray-500 text-xs">但已经有人在路上了</p>
            </div>
          ) : (
            mockComments.map((comment) => (
              <div
                key={comment.id}
                className="px-5 py-4 border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    👤
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-sm text-gray-900">
                        {comment.author}
                      </span>
                      <span className="text-xs text-gray-400">
                        {comment.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                      {comment.content}
                    </p>
                    <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-red-600 hover:bg-red-50 px-2.5 py-1.5 rounded-lg transition-all">
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span className="tabular-nums">{comment.likes}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* 举报入口 */}
        <div className="bg-white mt-4 p-5">
          <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg transition-all">
            <Flag className="w-4 h-4" />
            <div className="text-left">
              <div>内容不合适？点这里反馈</div>
              <p className="text-xs text-gray-400">我们会认真处理</p>
            </div>
          </button>
        </div>
      </div>

      {/* 底部评论输入 */}
      <div className="bg-white border-t border-gray-200 p-4 sticky bottom-0 shadow-2xl">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={post.type === "question" ? "我来回答" : "说点什么..."}
            className="flex-1 px-4 py-3 bg-gray-100 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button
            disabled={!comment}
            className={`px-6 py-3 rounded-full transition-all ${
              comment
                ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 active:scale-95 text-white shadow-lg"
                : "bg-gray-200 text-gray-400"
            }`}
          >
            发送
          </button>
        </div>
      </div>
    </div>
  );
}
