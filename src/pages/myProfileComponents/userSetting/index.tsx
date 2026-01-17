import { TopBarNav } from "@/components/TopBarNav";
import { onBack } from "@/utils/back";
import { ArrowLeft, Camera, Edit2, Save } from "lucide-react";
import { useState } from "react";

export default function UserSettings() {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    nickname: "普通求职人",
    avatar: "👤",
    bio: "一个正在求职的00后",
    jobStatus: "looking",
    industry: "互联网",
    position: "产品经理",
    experience: "应届生",
    location: "北京",
  });

  const [editData, setEditData] = useState({ ...userInfo });

  const jobStatusOptions = [
    { value: "looking", label: "正在找工作", emoji: "🔍" },
    { value: "working", label: "已经在职", emoji: "💼" },
    { value: "offer", label: "拿到offer了", emoji: "🎉" },
    { value: "rest", label: "暂时不找", emoji: "🏖️" },
  ];

  const experienceOptions = ["应届生", "1年以下", "1-3年", "3-5年", "5年以上"];
  const industryOptions = [
    "互联网",
    "金融",
    "教育",
    "电商",
    "游戏",
    "硬件",
    "企业服务",
    "医疗健康",
    "其他",
  ];

  const handleSave = () => {
    setUserInfo({ ...editData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({ ...userInfo });
    setIsEditing(false);
  };

  const updateField = (field: string, value: string) => {
    setEditData((prev) => ({ ...prev, [field]: value }));
  };

  const style =
    "bg-gradient-to-br text-white from-indigo-500 via-purple-500 to-pink-500";
  const rightSlot = !isEditing ? (
    <button
      onClick={() => setIsEditing(true)}
      className="flex items-center gap-2 px-3 py-2 border-none bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all"
    >
      <Edit2 className="w-4 h-4" />
      <span className="text-xs">编辑</span>
    </button>
  ) : (
    <div className="flex items-center gap-2">
      <button
        onClick={handleCancel}
        className=" border-none bg-transparent text-white/90 text-xs hover:text-blue-300"
      >
        取消
      </button>
      <button
        onClick={handleSave}
        className="flex items-center gap-1 px-2 py-2 border-none bg-white text-purple-600 rounded-lg hover:shadow-lg hover:bg-transparent transition-all"
      >
        <Save className="w-4 h-4" />
        <span className="text-xs">保存</span>
      </button>
    </div>
  );
  return (
    <TopBarNav
      onBack={onBack}
      context="个人设置"
      style={style}
      rightSlot={rightSlot}
    >
      <div className="flex flex-col h-full bg-gradient-to-b from-indigo-50/30 to-purple-50/20">
        {/* 内容区域 */}
        <div className="flex-1 overflow-y-auto p-3">
          {/* 头像和昵称 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-2">
            <div className="flex items-center gap-5 mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-3xl shadow-lg">
                  {isEditing ? editData.avatar : userInfo.avatar}
                </div>
                {isEditing && (
                  <button
                    aria-label="更换头像"
                    className="absolute -bottom-1 border-none -right-1 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="flex-1">
                {isEditing ? (
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      昵称
                    </label>
                    <input
                      placeholder="请输入昵称"
                      type="text"
                      value={editData.nickname}
                      onChange={(e) => updateField("nickname", e.target.value)}
                      className="w-full px-4 py-3 text-xs border-none ring-1 ring-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                ) : (
                  <div>
                    <h3 className="mb-1">{userInfo.nickname}</h3>
                    <p className="text-xs text-gray-500">ID: 123456</p>
                  </div>
                )}
              </div>
            </div>

            {/* 个人简介 */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                个人简介
              </label>
              {isEditing ? (
                <textarea
                  value={editData.bio}
                  onChange={(e) => updateField("bio", e.target.value)}
                  placeholder="介绍一下自己吧"
                  rows={3}
                  className="w-full px-4 py-3 border text-xs border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                />
              ) : (
                <p className="text-xs text-gray-700 bg-gray-50 rounded-lg p-3">
                  {userInfo.bio || "这个人很懒，什么都没写"}
                </p>
              )}
            </div>
          </div>

          {/* 求职状态 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4">
            <h4 className="mb-4 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
              求职状态
            </h4>

            {isEditing ? (
              <div className="grid grid-cols-2 gap-3">
                {jobStatusOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateField("jobStatus", option.value)}
                    className={`flex items-center gap-2 p-2 bg-transparent border-none ring ring-gray-200 rounded-xl transition-all ${
                      editData.jobStatus === option.value
                        ? "ring-purple-500 bg-gradient-to-r from-purple-50 to-pink-50 scale-105"
                        : "ring-gray-200 hover:ring-gray-300"
                    }`}
                  >
                    <span className="text-xl">{option.emoji}</span>
                    <span className="text-xs">{option.label}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl">
                <span className="text-xl">
                  {
                    jobStatusOptions.find((o) => o.value === userInfo.jobStatus)
                      ?.emoji
                  }
                </span>
                <span className="text-gray-900 text-sm">
                  {
                    jobStatusOptions.find((o) => o.value === userInfo.jobStatus)
                      ?.label
                  }
                </span>
              </div>
            )}
          </div>

          {/* 职业信息 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4">
            <h4 className="mb-4 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></span>
              职业信息
            </h4>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  所在行业
                </label>
                {isEditing ? (
                  <select
                    title="选择行业"
                    value={editData.industry}
                    onChange={(e) => updateField("industry", e.target.value)}
                    className="w-full px-4 py-2.5 border text-xs border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                  >
                    {industryOptions.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p className="text-xs text-gray-700 bg-gray-50 rounded-lg p-3">
                    {userInfo.industry}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  求职岗位
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.position}
                    onChange={(e) => updateField("position", e.target.value)}
                    placeholder="如：产品经理"
                    className="w-full text-xs px-4 py-4 ring-1 border-none ring-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                ) : (
                  <p className="text-xs text-gray-700 bg-gray-50 rounded-lg p-3">
                    {userInfo.position}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  工作经验
                </label>
                {isEditing ? (
                  <select
                    title="选择工作经验"
                    value={editData.experience}
                    onChange={(e) => updateField("experience", e.target.value)}
                    className="w-full px-4 py-2.5 text-xs border-none ring-1 ring-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                  >
                    {experienceOptions.map((exp) => (
                      <option key={exp} value={exp}>
                        {exp}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p className="text-xs text-gray-700 bg-gray-50 rounded-lg p-3">
                    {userInfo.experience}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  所在城市
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.location}
                    onChange={(e) => updateField("location", e.target.value)}
                    placeholder="如：北京"
                    className="w-full text-xs px-4 py-4 ring-1 border-none ring-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                ) : (
                  <p className="text-xs text-gray-700 bg-gray-50 rounded-lg p-3">
                    {userInfo.location}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* 提示 */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-3">
            <p className="text-xs text-blue-900 leading-relaxed">
              💡 <strong>温馨提示：</strong>
              <br />
              • 完善个人资料可以获得更精准的内容推荐
              <br />
              • 你的资料在匿名状态下不会被他人看到
              <br />• 可以随时修改这些信息
            </p>
          </div>
        </div>
      </div>
    </TopBarNav>
  );
}
