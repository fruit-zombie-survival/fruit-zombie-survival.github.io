---
name: game-onpage-seo
version: 2.1
description: 为已批准页面生成严格可审计的 On-page SEO Plan。
---

# Game On-page SEO Skill

## Knowledge binding

This skill loads bound knowledge via `.agent/knowledge/game-seo-v1/config/skill-bindings.json` for skill id `04-onpage-seo`.
`seo-single-source-of-truth.md` wins over older defaults (including legacy 1200/800 word floors; current floors are homepage **1500** / child **900**).

## 默认规则

- Title 目标 50–60
- Description 目标 150–160
- 1 H1
- 首页 >=1500 words（SSOT；旧默认 1200 已废弃）
- 子页 >=900 words（SSOT；旧默认 800 已废弃）
- Primary keyword：Title / H1 / first100Words / 核心 H2
- density 目标 2%～3%，以自然表达为先
- 首页到全部 P0/P1
- 子页回首页
- 子页到 1～3 个相关页面

## H 结构

H2 必须来自：
- Search Intent
- Fact Pack
- 真实玩家问题

禁止通用 AI H2 堆叠。

## 输出

每页：
- keyword mapping
- metadata
- H structure
- min/target words
- required placement
- density target
- internal links
- anchor plan
- source requirements
