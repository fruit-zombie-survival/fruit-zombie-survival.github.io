# On-page SEO 规则

## Title

- 目标 <=60 chars
- 主词靠前但自然
- 唯一
- 不堆关键词
- 日期只用于真正时效型页面

## Meta Description

- 目标约 140~160 chars
- 清楚说页面能解决什么
- 包含主词/核心实体但不要机械重复

## H1

- 每页一个
- 与主词/意图高度一致
- 不要求和 Title 完全相同

## H2/H3

H2 对应用户实际子问题。

不要为了词密度制造无意义 H2。

## 内容骨架

Worker 只生成结构：

- Hero answer / 简短摘要
- 2~5 个核心 H2
- 必要时表格/步骤/列表
- Related pages
- FAQ（有真实问题时）

真实数值/兑换码/掉落率必须标记待核验。

## 内链

- 首页 → 所有 P0/P1 页面
- 子页 → 首页
- 子页 → 语义最相关的 1~3 子页
- 锚文本自然多样，不机械 exact match

## Schema

按真实页面结构输出，不为 SEO 堆 Schema：

- BreadcrumbList：子页
- VideoGame：游戏实体信息足够时
- HowTo：页面确实是步骤指南时
- FAQPage：页面确实展示 FAQ 时
- Article/BlogPosting：适合文章/更新页时

## 发布安全

未经事实核验：`readyForLaunch=false`。
