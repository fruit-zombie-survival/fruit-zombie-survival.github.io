# Master Template 契约

## 固定代码层

Site Generator 不应该每次修改：

- app router 基础
- catch-all page
- components/site
- schema helpers
- URL/canonical helper
- sitemap/robots 机制
- GitHub workflow
- audit framework

## 可变层

Worker 可以生成/覆盖：

```text
content/generated/site.json
content/generated/home.json
content/generated/pages.json
SITE_PLAN.json
SEO_PLAN.json
CODEX_BRIEF.md
GENERATION_MANIFEST.json
.agent/skills/game-seo-fast-rank/
```

## 安全默认

- `readyForLaunch=false`
- placeholder asset 允许存在于 skeleton，但 CODEX_BRIEF 必须要求发布前替换
- 联系方式和正式域名可以先为空/placeholder

## 动态页面

registry 从 generated pages 得到 enabled pages。

Header 只显示 `navVisible=true`。

Sitemap 显示 enabled public pages，不依赖固定 starter pages。
