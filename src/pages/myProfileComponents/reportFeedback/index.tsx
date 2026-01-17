import { TopBarNav } from "@/components/TopBarNav";
import { onBack } from "@/utils/back";
import { MessageSquare, Send } from "lucide-react";
import { useState } from "react";

export default function ReportFeedback() {
  const [feedbackType, setFeedbackType] = useState<
    "bug" | "suggestion" | "report" | "other"
  >("suggestion");
  const [content, setContent] = useState("");
  const [contact, setContact] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const types = [
    {
      value: "bug" as const,
      label: "Bug反馈",
      emoji: "🐛",
      color: "from-red-500 to-pink-500",
    },
    {
      value: "suggestion" as const,
      label: "功能建议",
      emoji: "💡",
      color: "from-blue-500 to-cyan-500",
    },
    {
      value: "report" as const,
      label: "内容举报",
      emoji: "⚠️",
      color: "from-amber-500 to-orange-500",
    },
    {
      value: "other" as const,
      label: "其他反馈",
      emoji: "📝",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const handleSubmit = () => {
    if (!content) return;
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setContent("");
      setContact("");
    }, 2000);
  };

  const style =
    "bg-gradient-to-br text-white from-orange-500 via-red-500 to-pink-500";
  const bottomSlot = (
    <div className="px-4 pb-4 w-full">
      <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-3">
        <p className="text-sm text-white/90">💌 你的反馈让我们变得更好</p>
      </div>
    </div>
  );
  return (
    <TopBarNav
      onBack={onBack}
      context="举报与反馈"
      style={style}
      bottomSlot={bottomSlot}
    >
      <div className="flex flex-col h-full bg-gradient-to-b from-orange-50/30 to-red-50/20">
        {/* 内容区域 */}
        <div className="flex-1 overflow-y-auto p-5">
          {/* 反馈类型 */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 mb-4">
            <h3 className="mb-4">选择反馈类型</h3>
            <div className="grid grid-cols-2 gap-3">
              {types.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setFeedbackType(type.value)}
                  className={`flex flex-col items-center gap-2 p-4 bg-transparent rounded-xl ring-2 border-none ring-gray-200 transition-all ${
                    feedbackType === type.value
                      ? `border-transparent bg-gradient-to-br ${type.color} text-white shadow-lg scale-105`
                      : "border-gray-200 active:border-gray-300 active:bg-gray-50"
                  }`}
                >
                  <span className="text-xl">{type.emoji}</span>
                  <span className="text-xs">{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 反馈内容 */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 mb-4">
            <label className="block mb-3">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">详细描述</span>
              </div>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={
                  feedbackType === "bug"
                    ? "请描述你遇到的问题，包括操作步骤和预期结果"
                    : feedbackType === "suggestion"
                    ? "说说你的想法，我们会认真考虑"
                    : feedbackType === "report"
                    ? "描述你要举报的内容和原因"
                    : "告诉我们你的想法"
                }
                rows={8}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
              />
            </label>

            <label className="block">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-gray-700">联系方式（选填）</span>
              </div>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="留下邮箱或微信，方便我们联系你"
                className="w-full px-4 py-3 border-none ring-1 ring-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </label>
          </div>

          {/* 提示 */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-4 mb-4">
            <div className="flex items-start gap-3">
              <span className="text-xl">💡</span>
              <div className="text-sm text-blue-900 leading-relaxed">
                <p className="mb-2">温馨提示：</p>
                <ul className="space-y-1 text-xs text-blue-800">
                  <li>反馈内容会在1-3个工作日内处理</li>
                  <li>重要问题我们会第一时间联系你</li>
                  <li>感谢你让社区变得更好！</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 提交按钮 */}
          <button
            onClick={handleSubmit}
            disabled={!content}
            className={`w-full py-4 rounded-xl flex items-center justify-center border-none gap-2 transition-all ${
              content
                ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 active:scale-[0.98] text-white shadow-lg"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <Send className="w-5 h-5" />
            <span>提交反馈</span>
          </button>
        </div>

        {/* 成功提示 */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="mb-2">提交成功</h3>
              <p className="text-sm text-gray-600">
                感谢你的反馈
                <br />
                我们会认真处理
              </p>
            </div>
          </div>
        )}
      </div>
    </TopBarNav>
  );
}
