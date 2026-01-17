import { Home, MessageSquare, ShieldAlert, User } from "lucide-react";
import Taro, { useDidShow } from "@tarojs/taro";
import { useEffect, useState } from "react";

export function BottomNav() {
  const [activeTab, setActiveTab] = useState("");
  const tabList = [
    { pagePath: "/pages/index/index", text: "首页", icon: Home, id: "home" },
    {
      pagePath: "/pages/category/index",
      text: "吐槽",
      icon: MessageSquare,
      id: "category",
    },
    {
      pagePath: "/pages/guide/index",
      text: "避坑",
      icon: ShieldAlert,
      id: "guide",
    },
    {
      pagePath: "/pages/profile/index",
      text: "我的",
      icon: User,
      id: "profile",
    },
  ];

  // useDidShow(() => {
  //   const pages = Taro.getCurrentPages();
  //   const current = pages[pages.length - 1];
  //   const route = current.route;
  //   const matched = tabList.find((tab) => tab.pagePath === route);
  //   if (matched) {
  //     setActiveTab(matched.id);
  //   }
  // });
  // 监听路由变化，更新激活的标签
  useEffect(() => {
    const updateActiveTab = () => {
      const pages = Taro.getCurrentPages();
      if (pages.length > 0) {
        const current = pages[pages.length - 1];
        const route = current.route;
        const matched = tabList.find((tab) => tab.pagePath === route);
        if (matched) {
          setActiveTab(matched.id);
        }
      }
    };

    // 初始化时设置当前页面
    updateActiveTab();
    // 监听路由变化
    const eventChannel = Taro.eventCenter.on("routeChange", updateActiveTab);
    return () => {
      // 清理事件监听
      if (eventChannel) {
        eventChannel.off("routeChange", updateActiveTab);
      }
    };
  }, []);

  const switchTab = (tab) => {
    if (activeTab !== tab.id) {
      Taro.redirectTo({ url: tab.pagePath });
    }
  };

  return (
    <div className="flex flex-row items-center w-full bg-white fixed bottom-0 h-14 border-t border-gray-200">
      {tabList.map((tab) => {
        const isSelected = tab.id === activeTab;
        return (
          <button
            key={tab.pagePath}
            onClick={() => switchTab(tab)}
            className={`flex flex-col bg-white items-center justify-center gap-1 flex-1 h-full transition-all border-0 outline-none relative ${
              isSelected ? "text-blue-600" : "text-gray-500"
            }`}
          >
            {isSelected && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            )}
            <tab.icon
              className={`transition-all ${
                isSelected ? "w-4 h-4 scale-120" : "w-4 h-4"
              }`}
            />
            <span
              className={`text-xs transition-all ${
                isSelected ? "font-medium" : "font-xl"
              }`}
            >
              {tab.text}
            </span>
          </button>
        );
      })}
    </div>
  );
}
