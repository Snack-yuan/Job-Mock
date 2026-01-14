// 内容类型
export type PostType = 'rant' | 'guide' | 'question';

// 内容卡片
export interface Post {
  id: string;
  type: PostType;
  title: string;
  content: string;
  author: string;
  isAnonymous: boolean;
  timestamp: string;
  likes: number;
  comments: number;
  tags: string[];
  company?: string;
}

// 企业避坑
export interface Company {
  id: string;
  name: string;
  location: string;
  industry: string;
  riskLevel: 'safe' | 'warning' | 'danger';
  interviewProcess: string;
  salary: string;
  atmosphere: string;
  warning: string;
  useful: number;
  saved: number;
}

// 评论
export interface Comment {
  id: string;
  postId: string;
  author: string;
  isAnonymous: boolean;
  content: string;
  timestamp: string;
  likes: number;
}

// 情绪标签
export interface EmotionTag {
  emoji: string;
  label: string;
  tag: string;
}
