---
name: game-site-architect
version: 2.1
description: 把游戏专属搜索需求和 Game Fact Pack 转为最小但完整的 SEO 页面集合。
---

# Game Site Architect Skill

## Knowledge binding

This skill loads bound knowledge via `.agent/knowledge/game-seo-v1/config/skill-bindings.json` for skill id `03-game-site-architect`.
`seo-single-source-of-truth.md` wins over older defaults (including legacy 1200/800 word floors; current floors are homepage **1500** / child **900**).

## 唯一目标

用最少页面完整覆盖当前最重要、最确定的游戏搜索需求。

Minimal != Single Page。

## 输入

- Intent V2
- Game Fact Pack
- exact-game keyword metrics
- opportunity mode

## 页面建立条件

独立页至少满足：
- 有独立玩家问题；
- 有 exact-game search evidence 或强 new-game mechanism evidence；
- 能产生 >=900 words 的独立有价值内容（见 SSOT；旧默认 800 已废弃）；
- 不与其他页面高度重叠。

## 新词爆发型

可提前布局：
- 核心实体页
- 新手 Guide
- Codes（有 exact query 时）
- Characters / Abilities / Items 等真实核心系统

但：
- 不默认 codes/tier-list/calculator/wiki 全家桶。
- 不建没有事实基础的页面。

## 单页

必须明确 `singlePageReason`，不能只因为 Search Volume null。

## Primary Keyword

非首页必须通过：
- exact game name
- verified alias

否则拒绝页面。
