import { View } from "@tarojs/components";
import { ArrowLeft } from "lucide-react";

interface TopBarNavProps {
  onBack: () => void;
  context: string;
  children?: React.ReactNode;
}
export function TopBarNav({ onBack, context, children }: TopBarNavProps) {
  return (
    <View className="relative h-full">
      <div className="bg-white border-b border-gray-100 fixed w-full top-0 z-10 shadow-sm">
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
        </div>
      </div>
      <main>{children}</main>
    </View>
  );
}
