 # Friday - 个人开源工具展示站设计文档

 ## 项目概述

 新建独立项目 `me-portfolio`，部署于 Vercel，用于展示 `~/Friday/idea_workspace/me` 目录下的开源项目、工具与 Skill。项目与原有 `me` 目录完全隔离，仅通过手写的 `data/projects.json` 引用项目元数据，不读取、不修改任何现有项目文件。

 ## 目标与定位

- **目标**：建立一个对外个人品牌站点，集中展示个人开源作品。
- **受众**：国内开发者、潜在合作方、招聘方。
- **语言**：中文为主，部分专有名词保留英文。
- **风格**：Bento / Apple 风格，浅色默认，支持暗色模式。

 ## 视觉方向

- **整体风格**：Bento / Apple 风格，信息密度高、结构清晰、亲近感强。
- **色彩**：
  - 浅色模式：白色/浅灰背景，深灰文字，低饱和强调色（靛蓝/石板灰）。
  - 暗色模式：深灰/近黑背景，浅灰文字，强调色保持一致或轻微提亮。
- **布局**：大量圆角卡片、清晰网格、柔和阴影、充足留白。
- **字体**：中文优先使用系统字体栈（PingFang SC、Microsoft YaHei、Noto Sans SC 等），保证跨平台可读性。
- **动效**：轻量、克制。卡片悬停轻微上浮、阴影加深；分类切换平滑过渡；页面滚动平滑。

 ## 页面结构

 ### 1. Hero 区域
- 站点标题：**Friday**
- 一句话简介：例如“开发者 / 工具创作者 / 开源项目集合”
- 两个主要 CTA：
  - “查看项目”——滚动到项目展示墙
  - “GitHub”——跳转到个人 GitHub 主页
- 视觉处理：大标题 + 简短描述 + 按钮，背景干净，可能是 subtle gradient 或纯色。

 ### 2. 数据概览卡（Bento Grid）
- 以 Bento 小卡片形式展示：
  - 项目总数
  - Skill 数量
  - 主要技术栈标签
  - 最近更新/精选项目
- 卡片大小不一，形成视觉节奏。

 ### 3. 项目展示墙
- **核心区域**，以卡片网格展示所有项目。
- 每个项目卡片包含：
  - 项目名称
  - 一句话描述
  - 分类标签（自动化工具 / Web 工具 / CLI 工具 / Skill / 其他）
  - 技术栈标签
  - GitHub 链接
  - 状态标签（维护中 / 已完成 / 实验性）
- **筛选功能**：按分类快速筛选项目。
- **响应式布局**：桌面端 3 列，平板 2 列，手机 1 列。

 ### 4. 关于我
- 简短个人介绍（2-3 句话）。
- 联系方式：GitHub、邮箱等。
- 可配一张头像或抽象图形。

 ### 5. 页脚
- 版权信息
- 站点技术栈说明
- 社交/联系链接

 ## 数据模型

 项目数据统一存放在 `data/projects.json`：

 ```json
 {
   "id": "requirements-structuring",
   "name": "Requirements Structuring",
   "nameZh": "需求结构化",
   "description": "把零散需求一键整理成可决策的结构化简报",
   "category": "skill",
   "tags": ["Codex", "AI", "Prompt Engineering"],
   "techStack": ["Markdown"],
   "githubUrl": "https://github.com/Friday-Up/requirements-structuring",
   "status": "maintained"
 }
 ```

 分类建议：
- `automation` — 自动化工具（如 batch-image-replace、xhs-daily-report-splitter）
- `web` — Web 工具/服务（如 live）
- `cli` — 命令行工具（如 codex-provider-sync-project、feishu-to-jingme）
- `skill` — Codex / AI Skill（如 requirements-structuring、weekly-report）
- `other` — 其他（如 github-profile-3d、Mess）

 ## 技术栈

- **框架**：Next.js 14+（App Router）
- **语言**：TypeScript
- **样式**：Tailwind CSS
- **组件库**：shadcn/ui
- **动画**：Framer Motion（仅轻量使用）
- **图标**：Lucide React
- **主题**：next-themes（暗色/亮色切换）
- **部署**：Vercel

 ## 关键交互

- 暗色/亮色模式切换（右上角）。
- 项目分类筛选（顶部标签/按钮）。
- 卡片悬停：轻微 `translateY(-4px)` + 阴影加深。
- 按钮/链接悬停：背景色过渡。
- 平滑滚动到锚点区域。
- 移动端汉堡菜单（如导航项增多）。

 ## 非功能性要求

- **不影响原项目**：`me-portfolio` 完全独立，不读取 `me` 目录下任何文件。
- **性能**：静态生成，首屏加载快。
- **SEO**：使用 Next.js Metadata API 配置标题、描述、Open Graph。
- **响应式**：覆盖桌面、平板、手机。
- **可维护性**：项目数据与展示代码分离，便于后续新增项目。

 ## 部署

- 部署平台：Vercel
- 部署目录：`/Users/zhangyaolong.5/Friday/idea_workspace/me-portfolio`
- 构建输出：静态站点（`output: 'export'` 或 Vercel 默认）

 ## 待确认事项

 1. Hero 区域副标题是否需要更具体的定位描述？
 2. 是否需要“关于我”头像？
 3. 是否需要在项目卡片中展示 GitHub Stars 数？（需要的话后续可接 GitHub API）
