import { View } from "@tarojs/components";
import Taro, { useDidShow, useReady } from "@tarojs/taro";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

interface TopBarNavProps {
  onBack: () => void;
  context: string;
  children?: React.ReactNode;
  rightSlot?: React.ReactNode;
  bottomSlot?: React.ReactNode;
  style?: string;
}
export function TopBarNav({
  onBack,
  context,
  children,
  style,
  rightSlot,
  bottomSlot,
}: TopBarNavProps) {
  const [navHeight, setNavHeight] = useState("");
  useEffect(() => {
    if (bottomSlot) {
      console.log(1);
      const query = Taro.createSelectorQuery();
      query
        .select("#top-nav-container")
        .boundingClientRect((rect) => {
          if (Array.isArray(rect)) {
            if (rect.length > 0) {
              setNavHeight(rect[0].height + "px");
            }
          } else {
            setNavHeight(rect.height + "px");
          }
        })
        .exec();
      console.log(navHeight);
    }
  }, []);
  return (
    <View className="relative h-full">
      <div
        id="top-nav-container"
        className={`fixed w-full top-0 z-10 shadow-sm ${
          style ? style : "bg-white border-b border-gray-100"
        }`}
      >
        {/* 顶部导航 */}
        <div className="flex items-center gap-3 px-4 h-12">
          <button
            onClick={onBack}
            aria-label="返回上一页"
            className="w-7 h-7 flex items-center justify-center border-none rounded-full hover:bg-gray-100 active:bg-gray-200 "
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="text-sm font-medium">{context}</div>
          <div className="ml-auto">{rightSlot}</div>
        </div>
        <div className="flex items-start gap-3">{bottomSlot}</div>
      </div>
      <main style={{ paddingTop: navHeight }} className="pt-12">
        {children}
      </main>
    </View>
  );
}
