# Job-Mock - 多端统一招聘模拟应用

Job-Mock 是一个基于 Taro 框架的多端统一前端项目，旨在通过一套代码实现跨平台应用开发（如微信小程序、H5、百度智能小程序等），提升开发效率和维护性。

## 技术栈

- **前端框架**: React + Taro 4.0.7
- **语言**: TypeScript, JSX (react-jsx)
- **CSS 方案**: Sass
- **构建工具**: Webpack 5 + Babel 7
- **包管理**: pnpm

## 功能特色

- ✅ 多端构建：支持微信小程序、H5、支付宝小程序、百度小程序等多个平台
- ✅ 类型安全：完整的 TypeScript 支持，提供强类型开发体验
- ✅ 组件化开发：使用 React 组件化模式，便于维护和复用
- ✅ 响应式设计：适配移动端、平板和桌面设备
- ✅ 现代开发体验：支持热更新、模块路径别名等功能

## 安装步骤

### 环境要求

- Node.js (推荐使用长期维护版本)
- pnpm (推荐) 或 npm

### 1. 克隆项目

```bash
git clone <your-repo-url>
cd Job-Mock
```

### 2. 安装依赖

```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install
```

## 开发模式

### 启动不同平台的开发服务器：

#### H5 平台

```bash
npm run dev:h5
```

#### 微信小程序平台

```bash
npm run dev:weapp
```

#### 百度小程序平台

```bash
npm run dev:swan
```

#### 支付宝小程序平台

```bash
npm run dev:alipay
```

#### 字节跳动小程序平台

```bash
npm run dev:tt
```

#### QQ 小程序平台

```bash
npm run dev:qq
```

## 生产构建

### 构建不同平台的应用：

#### 构建 H5 版本

```bash
npm run build:h5
```

#### 构建微信小程序版本

```bash
npm run build:weapp
```

#### 构建其他平台版本

```bash
npm run build:swan      # 百度小程序
npm run build:alipay    # 支付宝小程序
npm run build:tt        # 字节跳动小程序
npm run build:qq        # QQ 小程序
```

## 代码规范

- 使用 ESLint 进行代码检查
- 使用 TypeScript 严格模式
- 组件名称使用 PascalCase
- 文件命名使用 kebab-case
- 使用 2 个空格缩进

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/新功能`)
3. 提交更改 (`git commit -m '添加新功能'`)
4. 推送分支 (`git push origin feature/新功能`)
5. 创建 Pull Request

## 许可证

MIT
