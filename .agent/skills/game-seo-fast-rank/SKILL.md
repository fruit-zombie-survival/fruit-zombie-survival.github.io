---
name: game-seo-fast-rank
version: 2.1
description: 兼容入口。V2 将能力拆成 Game Research、Keyword Intent、Site Architect、On-page SEO、Content Writing、SEO Audit 六个独立 Skill。
---

# Game SEO Fast Rank V2 Compatibility Skill

## Knowledge binding

This skill loads bound knowledge via `.agent/knowledge/game-seo-v1/config/skill-bindings.json` for skill id `game-seo-fast-rank`.
`seo-single-source-of-truth.md` wins over older defaults (including legacy 1200/800 word floors; current floors are homepage **1500** / child **900**).

本文件只用于生成 ZIP 内的统一 Codex 背景入口。

正式后台 AI Task 不应再把本 Skill 单独作为全部规则，而应按任务分别加载：

- `../01-game-research/SKILL.md`
- `../02-keyword-intent/SKILL.md`
- `../03-game-site-architect/SKILL.md`
- `../04-onpage-seo/SKILL.md`
- `../05-content-writing/SKILL.md`
- `../06-seo-audit/SKILL.md`

## 总原则

1. 游戏专属搜索词优先。
2. 新词爆发不能因为 Search Volume 滞后而自动退化单页。
3. 页面规划同时依赖 Search Evidence + Game Evidence。
4. Minimal Site 不是 Single Page。
5. 生成 ZIP 应基础可用、可 build；Codex 是可选精修。
6. 事实必须可追溯，不编造。
7. SEO 必须程序化 QA。
