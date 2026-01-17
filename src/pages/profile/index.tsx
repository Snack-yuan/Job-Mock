import { TabLayout } from "@/components/TabLayout";
import Taro from "@tarojs/taro";
import {
  FileText,
  Bookmark,
  HelpCircle,
  MessageCircle,
  Bell,
  Settings,
  Shield,
  Flag,
  Info,
  ChevronRight,
} from "lucide-react";

export default function ProfilePage() {
  const onNavigate = (page: string) => {
    Taro.navigateTo({ url: `/pages/myProfileComponents/${page}/index` });
  };
  const userStats = {
    rants: 6,
    guides: 2,
    saved: 15,
  };

  const menuSections = [
    {
      title: "我的内容",
      items: [
        {
          icon: FileText,
          label: "我发过的",
          count: userStats.rants,
          page: "myPosted",
        },
        {
          icon: Bookmark,
          label: "我收藏的",
          count: userStats.saved,
          page: "mySaved",
        },
        { icon: HelpCircle, label: "我问过的", count: 3, page: "myQuestions" },
        { icon: MessageCircle, label: "我回答的", count: 8, page: "myAnswers" },
      ],
    },
    {
      title: "通知",
      items: [
        { icon: Bell, label: "消息中心", badge: 5, page: "notifications" },
      ],
    },
    {
      title: "设置",
      items: [
        { icon: Settings, label: "个人资料", page: "userSetting" },
        { icon: Settings, label: "匿名设置", page: "anonymousSetting" },
        { icon: Shield, label: "隐私与安全", page: "privacySecurity" },
        { icon: Flag, label: "举报与反馈", page: "reportFeedback" },
        { icon: Info, label: "关于我们", page: "aboutUs" },
      ],
    },
  ];

  return (
    <TabLayout>
      <div className="flex flex-col h-full bg-gradient-to-b from-gray-50 to-blue-50/20">
        {/* 个人信息卡片 */}
        <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6 shadow-xl">
          <button
            onClick={() => onNavigate("userSetting")}
            className="w-full bg-transparent border-none rounded-2xl p-2 -m-2 transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-14 h-14 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-2xl shadow-lg">
                👤
              </div>
              <div className="flex-1 text-left">
                <h2 className="text-white mb-1.5">普通求职人</h2>
                <div className="flex items-center gap-2">
                  <span className="text-white/90 text-sm">已实名</span>
                  <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                  <span className="text-white/70 text-xs">ID: 123456</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-white/70" />
            </div>
          </button>

          {/* 数据统计 */}
          <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-5 border border-white/20 shadow-lg">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl mb-1.5 text-white">
                  {userStats.rants}
                </div>
                <div className="text-sm text-white/80">吐槽</div>
              </div>
              <div className="text-center border-x border-white/20">
                <div className="text-3xl mb-1.5 text-white">
                  {userStats.guides}
                </div>
                <div className="text-sm text-white/80">避雷</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-1.5 text-white">
                  {userStats.saved}
                </div>
                <div className="text-sm text-white/80">收藏</div>
              </div>
            </div>
          </div>
        </div>

        {/* 菜单列表 */}
        <div className="flex-1 overflow-y-auto pb-20">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mt-4">
              <div className="px-5 py-2">
                <h3 className="text-sm text-gray-500">{section.title}</h3>
              </div>
              <div className="bg-white mx-4 rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                {section.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={itemIndex}
                      onClick={() => item.page && onNavigate(item.page)}
                      className="w-full bg-transparent border-none flex items-center justify-between px-5 py-4 hover:bg-gray-50 group transition-all active:scale-[0.98]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                          <Icon className="w-4.5 h-4.5 text-white" />
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900">
                          {item.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.count !== undefined && (
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-lg tabular-nums">
                            {item.count}
                          </span>
                        )}
                        {item.badge !== undefined && (
                          <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full shadow-sm">
                            {item.badge}
                          </span>
                        )}
                        <ChevronRight className="w-5 h-5 text-gray-300" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 底部留白区域 */}
      <div className="h-12" />
    </TabLayout>
  );
}
