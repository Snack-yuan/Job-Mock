import { ArrowLeft } from "lucide-react";
import { PostCard } from "@/pages/postDetail/PostCard";
import { CompanyCard } from "@/pages/guide/CompanyCard";
import { mockPosts, mockCompanies } from "@/pages/data/mockData";
import type { Post } from "@/types";
import { useState } from "react";
import Taro from "@tarojs/taro";
import { onBack } from "@/utils/back";
import { TopBarNav } from "@/components/TopBarNav";

export default function MySaved() {
  const onPostClick = (post: Post) => {
    // 处理帖子点击事件
    Taro.navigateTo({
      url: `/pages/postDetail/PostDetail?postId=${post.id}`,
    });
  };
  const [activeTab, setActiveTab] = useState<"posts" | "companies">("posts");

  // 模拟收藏的内容
  const savedPosts = mockPosts.slice(0, 5);
  const savedCompanies = mockCompanies.slice(0, 3);

  const bottomSlot = (
    <div className="px-4 pb-4 w-full">
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab("posts")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border-none ring-2 ring-white transition-all flex-1 justify-center ${
            activeTab === "posts"
              ? "bg-white text-orange-600 ring-white scale-105"
              : "bg-white/20 backdrop-blur text-white ring-white/30 hover:bg-white/30"
          }`}
        >
          <span>帖子</span>
          <span className="text-xs bg-white/30 px-2 py-0.5 rounded-full">
            {savedPosts.length}
          </span>
        </button>
        <button
          onClick={() => setActiveTab("companies")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border-none ring-2 ring-white transition-all flex-1 justify-center ${
            activeTab === "companies"
              ? "bg-white text-orange-600 ring-white scale-105"
              : "bg-white/20 backdrop-blur text-white ring-white/30 hover:bg-white/30"
          }`}
        >
          <span>企业避雷</span>
          <span className="text-xs bg-white/30 px-2 py-0.5 rounded-full">
            {savedCompanies.length}
          </span>
        </button>
      </div>
    </div>
  );
  const style =
    "bg-gradient-to-br text-white text-white from-blue-500 via-purple-500 to-pink-500";
  return (
    <TopBarNav
      onBack={onBack}
      context="我收藏的"
      style={style}
      bottomSlot={bottomSlot}
    >
      {/* 内容列表 */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === "posts" ? (
          savedPosts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 px-4">
              <div className="text-6xl mb-4">🔖</div>
              <p className="text-gray-600 text-center mb-2">还没有收藏的帖子</p>
              <p className="text-gray-500 text-sm text-center">
                看到好内容记得收藏哦
              </p>
            </div>
          ) : (
            <div className="bg-white shadow-sm rounded-t-3xl mt-2">
              {savedPosts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  onClick={() => onPostClick(post)}
                />
              ))}
            </div>
          )
        ) : savedCompanies.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="text-6xl mb-4">🛡️</div>
            <p className="text-gray-600 text-center mb-2">
              还没有收藏的企业避雷
            </p>
            <p className="text-gray-500 text-sm text-center">
              在避坑指南里收藏避雷信息
            </p>
          </div>
        ) : (
          <div className="p-5">
            {savedCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        )}
      </div>
    </TopBarNav>
  );
}
