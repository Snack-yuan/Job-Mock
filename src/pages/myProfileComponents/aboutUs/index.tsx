import { TopBarNav } from "@/components/TopBarNav";
import { onBack } from "@/utils/back";
import {
  Heart,
  Shield,
  Users,
  MessageCircle,
  Mail,
  ExternalLink,
} from "lucide-react";

export default function AboutUs() {
  const features = [
    {
      icon: Shield,
      title: "安全匿名",
      description: "保护你的隐私，让你放心吐槽",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "同龄人社区",
      description: "专为00后求职者打造的交流空间",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MessageCircle,
      title: "真实经历",
      description: "都是真实求职故事，不是鸡汤",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Heart,
      title: "互相抱团",
      description: "一起吐槽，一起成长，不孤单",
      color: "from-red-500 to-rose-500",
    },
  ];

  const links = [
    { label: "用户协议", url: "#" },
    { label: "隐私政策", url: "#" },
    { label: "社区规范", url: "#" },
    { label: "常见问题", url: "#" },
  ];
  const style =
    "bg-gradient-to-br text-white from-purple-500 via-pink-500 to-rose-500";
  return (
    <TopBarNav onBack={onBack} context="关于我们" style={style}>
      <div className="flex flex-col h-full bg-gradient-to-b from-purple-50/30 to-pink-50/20">
        {/* 内容区域 */}
        <div className="flex-1 overflow-y-auto p-5">
          {/* Logo 和介绍 */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-5 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-3xl flex items-center justify-center mx-auto mb-5 shadow-xl">
              <span className="text-5xl">💼</span>
            </div>
            <h2 className="mb-3">求职吐槽社区</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              专为00后求职人群打造的
              <br />
              安全吐槽 · 避坑指南 · 抱团取暖
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full border border-purple-200">
              <span className="text-sm">版本 1.0.0</span>
            </div>
          </div>

          {/* 核心特色 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5">
            <h3 className="mb-4 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
              核心特色
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="p-3 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl border border-gray-100 hover:shadow-md transition-all"
                  >
                    <div
                      className={`w-10 h-10 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-3 shadow-md`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 我们的愿景 */}
          <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-2xl shadow-lg p-6 mb-5 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3>我们的愿景</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              让每一个求职的00后都能找到懂自己的人，不用独自面对那些糟心事。我们不贩卖焦虑，不灌输鸡汤，只想做一个真实、温暖、有用的社区。
            </p>
          </div>

          {/* 联系方式 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5">
            <h3 className="mb-4 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></span>
              联系我们
            </h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-2 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-none ring-1 ring-blue-100 rounded-xl active:ring-blue-200 active:shadow-md transition-all">
                <div className="w-10 h-10 shrink-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm text-gray-900 mb-0.5">客服邮箱</p>
                  <p className="text-xs text-gray-600">support@jobrant.com</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </button>

              <button className="w-full flex items-center gap-2 p-4 bg-gradient-to-r border-none ring-1 from-purple-50 to-pink-50 border ring-purple-100 rounded-xl active:ring-purple-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm text-gray-900 mb-0.5">官方微信</p>
                  <p className="text-xs text-gray-600">JobRant2024</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* 相关链接 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5">
            <h3 className="mb-4 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></span>
              相关链接
            </h3>
            <div className="space-y-2">
              {links.map((link, index) => (
                <button
                  key={index}
                  className="w-full flex items-center border-none bg-white justify-between p-3 active:bg-gradient-to-r active:from-gray-50 active:to-blue-50/30 rounded-xl transition-all"
                >
                  <span className="text-xs text-gray-700">{link.label}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </button>
              ))}
            </div>
          </div>

          {/* 致谢 */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-5 mb-5">
            <div className="text-center">
              <div className="text-4xl mb-3">🙏</div>
              <h3 className="mb-2">感谢有你</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                感谢每一位愿意分享真实经历的求职者
                <br />
                你们的故事让这个社区更有温度
              </p>
            </div>
          </div>

          {/* 版权信息 */}
          <div className="text-center py-6">
            <p className="text-sm text-gray-500 mb-2">© 2026 求职吐槽社区</p>
            <p className="text-xs text-gray-400">让求职不再孤单</p>
          </div>
        </div>
      </div>
    </TopBarNav>
  );
}
