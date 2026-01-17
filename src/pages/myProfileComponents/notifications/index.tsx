import { onBack } from "@/utils/back";
import {
  ArrowLeft,
  ThumbsUp,
  MessageCircle,
  UserPlus,
  Bell,
} from "lucide-react";
import { useState } from "react";

export default function Notifications() {
  const [activeTab, setActiveTab] = useState<
    "all" | "like" | "comment" | "system"
  >("all");

  const notifications = [
    {
      id: "1",
      type: "like",
      avatar: "👤",
      user: "匿名求职人",
      action: "觉得你的吐槽很有道理",
      content: "面试官让我做白嫖测试题，太离谱了",
      time: "5分钟前",
      unread: true,
    },
    {
      id: "2",
      type: "comment",
      avatar: "👤",
      user: "过来人",
      action: "回复了你的帖子",
      content: "我也遇到过同样的情况，建议直接拒绝",
      time: "1小时前",
      unread: true,
    },
    {
      id: "3",
      type: "like",
      avatar: "👤",
      user: "求职小白",
      action: "赞同了你的避坑指南",
      content: "某大厂外包公司避雷指南",
      time: "3小时前",
      unread: true,
    },
    {
      id: "4",
      type: "comment",
      avatar: "👤",
      user: "匿名求职人",
      action: "回答了你的问题",
      content: "这家公司的面试流程是怎样的？",
      time: "昨天",
      unread: false,
    },
    {
      id: "5",
      type: "system",
      avatar: "🔔",
      user: "系统通知",
      action: "你的内容获得了新成就",
      content: '恭喜！你的帖子获得了100个"我懂你"',
      time: "昨天",
      unread: false,
    },
    {
      id: "6",
      type: "like",
      avatar: "👤",
      user: "职场新人",
      action: "收藏了你的避坑指南",
      content: "互联网公司面试避坑经验分享",
      time: "2天前",
      unread: false,
    },
  ];

  const tabs = [
    { value: "all" as const, label: "全部", count: notifications.length },
    {
      value: "like" as const,
      label: "赞同",
      count: notifications.filter((n) => n.type === "like").length,
    },
    {
      value: "comment" as const,
      label: "回复",
      count: notifications.filter((n) => n.type === "comment").length,
    },
    {
      value: "system" as const,
      label: "系统",
      count: notifications.filter((n) => n.type === "system").length,
    },
  ];

  const filteredNotifications =
    activeTab === "all"
      ? notifications
      : notifications.filter((n) => n.type === activeTab);

  const getIcon = (type: string) => {
    switch (type) {
      case "like":
        return <ThumbsUp className="w-4 h-4" />;
      case "comment":
        return <MessageCircle className="w-4 h-4" />;
      case "system":
        return <Bell className="w-4 h-4" />;
      default:
        return <UserPlus className="w-4 h-4" />;
    }
  };

  const getIconBg = (type: string) => {
    switch (type) {
      case "like":
        return "bg-gradient-to-br from-red-500 to-pink-500";
      case "comment":
        return "bg-gradient-to-br from-blue-500 to-cyan-500";
      case "system":
        return "bg-gradient-to-br from-purple-500 to-indigo-500";
      default:
        return "bg-gradient-to-br from-green-500 to-emerald-500";
    }
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-purple-50/30 to-blue-50/20">
      {/* 顶部导航 */}
      <div className="bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 sticky top-0 z-10 shadow-lg">
        <div className="flex items-center gap-3 px-4 h-14">
          <button
            aria-label="返回"
            onClick={onBack}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/20 active:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-white">消息中心</h2>
        </div>

        {/* 分类标签 */}
        <div className="px-4 pb-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all whitespace-nowrap ${
                  activeTab === tab.value
                    ? "bg-white text-purple-600 border-white scale-105"
                    : "bg-white/20 backdrop-blur text-white border-white/30 hover:bg-white/30"
                }`}
              >
                <span className="text-sm">{tab.label}</span>
                <span className="text-xs bg-white/30 px-2 py-0.5 rounded-full">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 通知列表 */}
      <div className="flex-1 overflow-y-auto">
        {filteredNotifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="text-6xl mb-4">🔔</div>
            <p className="text-gray-600 text-center mb-2">暂时没有新消息</p>
            <p className="text-gray-500 text-sm text-center">
              有新动态我们会第一时间通知你
            </p>
          </div>
        ) : (
          <div className="bg-white shadow-sm rounded-t-3xl mt-2">
            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`px-5 py-4 border-b border-gray-50 hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-blue-50/50 transition-all cursor-pointer ${
                  notification.unread ? "bg-blue-50/30" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`relative w-12 h-12 ${getIconBg(
                      notification.type
                    )} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}
                  >
                    <div className="text-white text-xl">
                      {notification.avatar}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <div className="text-purple-600">
                        {getIcon(notification.type)}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-900">
                          {notification.user}
                        </span>
                        {notification.unread && (
                          <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></span>
                        )}
                      </div>
                      <span className="text-xs text-gray-400 whitespace-nowrap ml-2">
                        {notification.time}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 mb-2">
                      {notification.action}
                    </p>

                    <div className="bg-gray-50 rounded-lg px-3 py-2 border border-gray-100">
                      <p className="text-sm text-gray-700 line-clamp-2">
                        {notification.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 底部操作 */}
      {filteredNotifications.length > 0 && (
        <div className="bg-white border-t border-gray-200 p-4">
          <button className="w-full py-3 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all">
            全部标记为已读
          </button>
        </div>
      )}
    </div>
  );
}
