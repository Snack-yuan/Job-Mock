// 封装的布局组件 components/TabLayout.tsx
import { View } from "@tarojs/components";
import { BottomNav } from "@/custom-tab-bar/BottomNav";

export function TabLayout({ children }) {
  return (
    <View className="relative h-[100vh]">
      {/* 页面自定义内容 */}
      <View>{children}</View>
      {/* 固定渲染底部导航栏 */}
      <BottomNav />
    </View>
  );
}
