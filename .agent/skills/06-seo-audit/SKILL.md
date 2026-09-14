---
name: game-seo-audit
version: 2.1
description: 用程序化规则优先检查生成站的页面映射、On-page SEO、内容完整性、内链和技术 SEO。
---

# Game SEO Audit Skill

## Knowledge binding

This skill loads bound knowledge via `.agent/knowledge/game-seo-v1/config/skill-bindings.json` for skill id `06-seo-audit`.
`seo-single-source-of-truth.md` wins over older defaults (including legacy 1200/800 word floors; current floors are homepage **1500** / child **900**).

## 程序优先，不让 LLM 自评

Hard Fail：
- 非首页 primary keyword 不属于游戏
- Title/H1 缺主词
- 内容低于 minimum（首页 1500 / 子页 900；无 70% 软地板）
- 页面仍有工程 placeholder 或 forbidden public copy
- broken internal links
- orphan page
- canonical/sitemap 重大错误
- 页面没有独立 intent
- contentMode 为 mock/fallback 时不得 Ready

Warning：
- density 偏离目标
- H2 泛化
- anchor 重复
- description 质量弱

LLM Repair 只处理可自动修复的 content/SEO 文本问题，次数由 settings 控制（硬顶 2）。
