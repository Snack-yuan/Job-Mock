import { TopBarNav } from "@/components/TopBarNav";
import { onBack } from "@/utils/back";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function AnonymousSettings() {
  const [settings, setSettings] = useState({
    defaultAnonymous: true,
    hideProfile: true,
    anonymousComment: true,
    showBadge: false,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const settingItems = [
    {
      key: "defaultAnonymous" as const,
      icon: ShieldCheck,
      title: "默认匿名发布",
      description: "发布内容时默认开启匿名模式",
      color: "from-blue-500 to-cyan-500",
    },
    {
      key: "hideProfile" as const,
      icon: EyeOff,
      title: "隐藏个人主页",
      description: "其他人无法查看你的个人主页",
      color: "from-purple-500 to-pink-500",
    },
    {
      key: "anonymousComment" as const,
      icon: Eye,
      title: "评论时自动匿名",
      description: "发表评论时自动使用匿名身份",
      color: "from-amber-500 to-orange-500",
    },
    {
      key: "showBadge" as const,
      icon: ShieldCheck,
      title: "显示实名认证标识",
      description: "在非匿名状态下显示实名认证标识",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const style =
    "bg-gradient-to-br text-white from-indigo-500 via-purple-500 to-pink-500";
  const bottomSlot = (
    <div className="px-4 pb-4 w-full">
      <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-4">
        <p className="text-sm text-white/90 leading-relaxed">
          💡 匿名功能可以保护你的隐私
          <br />
          让你更自由地表达真实想法
        </p>
      </div>
    </div>
  );
  return (
    <TopBarNav
      context="匿名设置"
      onBack={onBack}
      style={style}
      bottomSlot={bottomSlot}
    >
      {/* 设置列表 */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
          {settingItems.map((item, index) => {
            const Icon = item.icon;
            const isEnabled = settings[item.key];

            return (
              <div
                key={item.key}
                className={`p-5 ${
                  index !== settingItems.length - 1
                    ? "border-b border-gray-50"
                    : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-gray-900">{item.title}</h4>
                      <button
                        aria-label={`切换 ${item.title} 设置`}
                        onClick={() => toggleSetting(item.key)}
                        className={`relative w-14 h-7 rounded-full transition-colors shrink-0 border-none ${
                          isEnabled
                            ? `bg-gradient-to-r ${item.color}`
                            : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                            isEnabled ? "translate-x-8" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 提示信息 */}
        <div className="mt-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h4 className="text-sm text-amber-900 mb-1">温馨提示</h4>
              <p className="text-sm text-amber-800 leading-relaxed">
                即使开启匿名，也请遵守社区规范，不要发布违法违规内容。我们会保留必要的日志信息以配合监管要求。
              </p>
            </div>
          </div>
        </div>

        {/* 匿名规则 */}
        <div className="mt-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <h3 className="mb-4 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
            匿名规则说明
          </h3>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <p>匿名状态下，其他用户无法看到你的昵称和头像</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-500 mt-1">•</span>
              <p>你的发布记录和收藏仅自己可见</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <p>匿名不代表可以随意发布不当内容</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-500 mt-1">•</span>
              <p>管理员可以查看匿名用户的真实身份</p>
            </div>
          </div>
        </div>
      </div>
    </TopBarNav>
  );
}
