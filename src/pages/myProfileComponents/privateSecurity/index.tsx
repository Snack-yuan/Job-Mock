import { TopBarNav } from "@/components/TopBarNav";
import { onBack } from "@/utils/back";
import Taro from "@tarojs/taro";
import { Lock, Shield, Eye, Trash2, Download, LogOut } from "lucide-react";
import { useState } from "react";

export default function PrivacySecurity() {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const privacyItems = [
    {
      icon: Lock,
      title: "账号密码",
      description: "修改登录密码",
      color: "from-blue-500 to-cyan-500",
      action: "修改",
    },
    {
      icon: Shield,
      title: "实名认证信息",
      description: "已通过实名认证",
      color: "from-green-500 to-emerald-500",
      action: "查看",
    },
    {
      icon: Eye,
      title: "隐私设置",
      description: "谁可以看到我的内容",
      color: "from-purple-500 to-pink-500",
      action: "设置",
    },
    {
      icon: Download,
      title: "数据导出",
      description: "导出我的所有数据",
      color: "from-amber-500 to-orange-500",
      action: "导出",
    },
  ];

  const handleLogout = () => {
    Taro.clearStorageSync();
    Taro.reLaunch({ url: "/pages/login/index" });
  };

  const style =
    "bg-gradient-to-br text-white from-indigo-500 via-purple-500 to-pink-500";
  const bottomSlot = (
    <div className="px-4 pb-4 w-full">
      <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-white mb-1">账号安全等级：高</h4>
            <p className="text-white/80 text-sm">你的账号保护良好</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <TopBarNav
      onBack={onBack}
      context="隐私与安全"
      style={style}
      bottomSlot={bottomSlot}
    >
      <div className="flex flex-col h-full bg-gradient-to-b from-blue-50/30 to-indigo-50/20">
        {/* 设置列表 */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* 隐私设置 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 mb-4">
            {privacyItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  className={`w-full flex items-center border-none gap-4 p-5 bg-white text-left ${
                    index !== privacyItems.length - 1
                      ? "border-b border-gray-50"
                      : ""
                  }`}
                >
                  <div
                    className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </div>

                  <span className="text-xs text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg">
                    {item.action}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 数据管理 */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 mb-4">
            <h4 className="mb-4 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
              数据管理
            </h4>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div>
                  <p className="text-sm text-gray-900 mb-1">存储空间使用</p>
                  <p className="text-xs text-gray-500">
                    已使用 15.6 MB / 200 MB
                  </p>
                </div>
                <div className="text-sm text-gray-600">7.8%</div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div>
                  <p className="text-sm text-gray-900 mb-1">缓存数据</p>
                  <p className="text-xs text-gray-500">图片、视频缓存</p>
                </div>
                <button className="text-sm border-none bg-transparent text-blue-600 hover:underline">
                  清理
                </button>
              </div>
            </div>
          </div>

          {/* 登录设备 */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 mb-4">
            <h4 className="mb-4 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></span>
              登录设备
            </h4>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">📱</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-xs text-gray-900">iPhone 15 Pro</p>
                    <span className="text-xs shrink-0 text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                      当前设备
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">北京 · 刚刚活跃</p>
                </div>
              </div>

              <div className="flex items-start justify-between gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">💻</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-900 mb-1">Chrome 浏览器</p>
                    <p className="text-xs text-gray-600">上海 · 3天前</p>
                  </div>
                </div>
                <button className="text-xs text-red-600 border-none bg-transparent active:underline whitespace-nowrap">
                  移除
                </button>
              </div>
            </div>
          </div>

          {/* 账号操作 */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 mb-4">
            <h4 className="mb-4 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></span>
              账号操作
            </h4>

            {/* 退出登录 */}
            <button
              onClick={() => setShowLogoutConfirm(true)}
              className="w-full border-none ring-2 flex items-center gap-4 p-4 bg-gradient-to-r from-amber-50 to-yellow-50  ring-amber-200 rounded-xl active:border-amber-300 active:from-amber-100 active:to-yellow-100 transition-all mb-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <LogOut className="w-6 h-6 text-white" />
              </div>

              <div className="flex-1 text-left">
                <h3 className="text-amber-900 mb-1">退出登录</h3>
                <p className="text-xs text-amber-700">退出当前账号</p>
              </div>

              <span className="text-sm text-amber-600">→</span>
            </button>
          </div>

          {/* 危险操作 */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5">
            <h4 className="mb-4 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></span>
              危险操作
            </h4>

            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="w-full flex items-center border-none gap-4 p-4 bg-gradient-to-r from-red-50 to-pink-50 ring-2 ring-red-200 rounded-xl active:ring-red-300 active:from-red-100 active:to-pink-100 transition-all"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <Trash2 className="w-6 h-6 text-white" />
              </div>

              <div className="flex-1 text-left">
                <h3 className="text-red-700 mb-1">注销账号</h3>
                <p className="text-xs text-red-600">永久删除账号及所有数据</p>
              </div>

              <span className="text-sm text-red-600">→</span>
            </button>
          </div>
        </div>

        {/* 退出登录确认弹窗 */}
        {showLogoutConfirm && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowLogoutConfirm(false)}
          >
            <div
              className="bg-white rounded-3xl p-6 max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LogOut className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-2">确定要退出登录吗？</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  退出后需要重新登录
                  <br />
                  你的数据会被安全保存
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleLogout}
                  className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl transition-all"
                >
                  确定退出
                </button>
                <button
                  onClick={() => setShowLogoutConfirm(false)}
                  className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-all"
                >
                  我再想想
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 注销确认弹窗 */}
        {showDeleteConfirm && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowDeleteConfirm(false)}
          >
            <div
              className="bg-white rounded-3xl p-6 max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trash2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-2">确定要注销账号吗？</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  注销后将无法恢复
                  <br />
                  你的所有数据都会被永久删除
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => {
                    // 处理注销逻辑
                    setShowDeleteConfirm(false);
                  }}
                  className="w-full py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-xl transition-all"
                >
                  确定注销
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-all"
                >
                  我再想想
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* 底部留白 */}
      <div className="h-6"></div>
    </TopBarNav>
  );
}
