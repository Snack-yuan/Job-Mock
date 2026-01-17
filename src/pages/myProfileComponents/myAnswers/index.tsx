import { ArrowLeft, MessageCircle } from "lucide-react";
import { onBack } from "@/utils/back";

export default function MyAnswers() {
  const myAnswers = [
    {
      id: "1",
      question: "这家公司的面试流程是怎样的？",
      questionAuthor: "匿名求职人",
      myAnswer:
        "我去年面试过，总共三轮：HR面、技术面、总监面。技术面比较注重基础，会问很多细节问题。",
      timestamp: "2小时前",
      likes: 15,
    },
    {
      id: "2",
      question: "收到offer后多久要回复？",
      questionAuthor: "求职小白",
      myAnswer:
        "一般是3-5个工作日，但建议尽快回复。如果需要更多时间考虑，可以礼貌地向HR申请延期。",
      timestamp: "昨天",
      likes: 28,
    },
    {
      id: "3",
      question: "面试时被问到离职原因怎么回答？",
      questionAuthor: "职场新人",
      myAnswer:
        "建议从正面角度说明，比如寻求更好的发展机会、想在新领域挑战自己等。避免说前公司的坏话。",
      timestamp: "3天前",
      likes: 42,
    },
  ];

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-green-50/30 to-emerald-50/20">
      {/* 顶部导航 */}
      <div className="bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 sticky top-0 z-10 shadow-lg">
        <div className="flex items-center gap-3 px-4 h-14">
          <button
            aria-label="返回"
            onClick={onBack}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/20 active:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-white">我回答的</h2>
        </div>

        <div className="px-4 pb-4">
          <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl text-white mb-1">
                  {myAnswers.length}
                </div>
                <p className="text-sm text-white/80">回答总数</p>
              </div>
              <div className="border-l border-white/20 pl-4">
                <div className="text-2xl text-white mb-1">85</div>
                <p className="text-sm text-white/80">获得赞同</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 回答列表 */}
      <div className="flex-1 overflow-y-auto">
        {myAnswers.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="text-6xl mb-4">💬</div>
            <p className="text-gray-600 text-center mb-2">还没有回答记录</p>
            <p className="text-gray-500 text-sm text-center">
              去帮助其他求职者吧
            </p>
          </div>
        ) : (
          <div className="p-4 space-y-4">
            {myAnswers.map((answer) => (
              <div
                key={answer.id}
                className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:border-green-200 transition-all cursor-pointer"
              >
                {/* 原问题 */}
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-start gap-2 mb-2">
                    <MessageCircle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 mb-1 line-clamp-2">
                        {answer.question}
                      </p>
                      <p className="text-xs text-gray-500">
                        来自 {answer.questionAuthor}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 我的回答 */}
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">我</span>
                    </div>
                    <span className="text-sm text-gray-700">的回答</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed pl-8">
                    {answer.myAnswer}
                  </p>
                </div>

                {/* 底部信息 */}
                <div className="flex items-center justify-between text-sm text-gray-500 pl-8">
                  <span>{answer.timestamp}</span>
                  <div className="flex items-center gap-1.5 text-green-600">
                    <span>👍</span>
                    <span className="tabular-nums">{answer.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
