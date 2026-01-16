import { TopBarNav } from "@/components/TopBarNav";
import { onBack } from "@/utils/back";
import { useState } from "react";
export default function CreatePostSheet() {
  const [postType, setPostType] = useState<"rant" | "guide" | "question">(
    "rant"
  );
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const postTypes = [
    {
      value: "rant" as const,
      label: "吐槽一下",
      emoji: "😤",
      color: "from-red-500 to-pink-500",
    },
    {
      value: "guide" as const,
      label: "写个避坑",
      emoji: "🛡️",
      color: "from-amber-500 to-orange-500",
    },
    {
      value: "question" as const,
      label: "提个问题",
      emoji: "❓",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const availableTags = [
    "被HR气到了",
    "面试很离谱",
    "已读不回",
    "薪资不符",
    "已经麻了",
    "工作环境",
    "加班文化",
  ];

  const handleSubmit = () => {
    // 这里应该提交数据
    console.log("发布内容:", {
      postType,
      title,
      content,
      isAnonymous,
      selectedTags,
    });
    // 重置表单
    setTitle("");
    setContent("");
    setSelectedTags([]);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <TopBarNav onBack={onBack} context="发布你的贴子">
      <div className="h-full flex flex-col">
        {/* 头部 */}
        <div className="flex items-center justify-between p-5 border-gray-100">
          <div>
            <h3>发布内容</h3>
            <p className="text-sm text-gray-500 mt-0.5">
              说出你的真实经历！！！
            </p>
          </div>
        </div>

        {/* 内容区域 */}
        <div className="flex-1 p-5">
          {/* 类型选择 */}
          <div className="mb-6">
            <h3 className="mb-3 text-gray-700">你想发什么？</h3>
            <div className="grid grid-cols-3 gap-3">
              {postTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setPostType(type.value)}
                  className={`flex flex-col items-center gap-2.5 p-3 rounded-2xl border-0 transition-all ${
                    postType === type.value
                      ? `border-transparent bg-gradient-to-br ${type.color} text-white shadow-lg scale-105`
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-xl">{type.emoji}</span>
                  <span className="text-xs">{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 标题 */}
          <div className="mb-5">
            <label className="block mb-2 text-sm text-gray-700">标题</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="一句话说清你有多无语"
              className="w-full px-4 py-3.5 border-0 ring-1 ring-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* 内容 */}
          <div className="mb-5">
            <label className="block mb-2 text-sm text-gray-700">内容</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="把经历写下来&#10;说给懂你的人听"
              rows={6}
              className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
            />
          </div>

          {/* 标签选择 */}
          <div className="mb-5">
            <label className="block mb-2 text-sm text-gray-700">
              {postType === "rant" && "选几个相关话题，方便更多人看到"}
              {postType === "guide" && "填写企业信息，帮助更多人避雷"}
              {postType === "question" && "选好分类，更容易被回答"}
            </label>
            <div className="flex flex-wrap gap-2">
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-full border-none text-xs transition-all ${
                    selectedTags.includes(tag)
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* 匿名开关 */}
          <div className="mb-6">
            <label className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl cursor-pointer border border-blue-100">
              <div>
                <div className="mb-1 text-gray-900">匿名发布</div>
                <p className="text-sm text-gray-600">
                  开启匿名后，他人无法看到你的个人信息
                </p>
              </div>
              <div
                className={`relative shrink-0 w-14 h-7 rounded-full transition-colors ${
                  isAnonymous
                    ? "bg-gradient-to-r from-blue-500 to-purple-500"
                    : "bg-gray-300"
                }`}
                onClick={() => setIsAnonymous(!isAnonymous)}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                    isAnonymous ? "translate-x-8" : "translate-x-1"
                  }`}
                />
              </div>
            </label>
          </div>

          {/* 提示 */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 mb-4">
            <p className="text-xs text-amber-800 leading-relaxed">
              请基于真实经历分享
              <br />
              避免泄露个人隐私
            </p>
          </div>
        </div>

        {/* 底部按钮 */}
        <div className="p-5 border-gray-100 bg-gray-50">
          <button
            onClick={handleSubmit}
            disabled={!title || !content}
            className={`w-full py-4 border-none ring-2  rounded-xl transition-all ${
              title && content
                ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 active:scale-[0.98] text-white shadow-lg"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {title && content ? "发出去了 🚀" : "写点内容再发吧"}
          </button>
        </div>
      </div>
    </TopBarNav>
  );
}
