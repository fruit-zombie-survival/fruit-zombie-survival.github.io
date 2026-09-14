---
name: game-keyword-intent
version: 2.1
description: 只使用游戏专属搜索词识别玩家需求，彻底隔离泛关键词污染。
---

# Game Keyword Intent Skill

## Knowledge binding

This skill loads bound knowledge via `.agent/knowledge/game-seo-v1/config/skill-bindings.json` for skill id `02-keyword-intent`.
`seo-single-source-of-truth.md` wins over older defaults (including legacy 1200/800 word floors; current floors are homepage **1500** / child **900**).

## 第一原则

MVP1 strict mode：

> 页面规划关键词必须包含完整游戏名，或包含 verified alias。

Generic / ambiguous query 可以作为研究提示，但不属于页面需求证据。

## 输入

- 主游戏名
- verified aliases
- exact-game suggestions
- 主词 Trends
- Search Volume
- Related / Autocomplete 中通过专属性过滤的词
- Game Fact Pack 摘要

## 聚类

按玩家实际需求：
- Codes
- Characters
- Abilities
- Pets
- Eggs
- Weapons
- Items
- Maps
- Guide
- Updates
- Tier List
- 其他游戏实际存在的需求

不要输出纯抽象：
- informational
- transactional

## 新游戏原则

`breakout_new_game`：
- Search Volume null 不等于没需求。
- Exact query + autocomplete/rising + confirmed game mechanic 可以形成独立页面机会。

## 输出

- opportunityMode
- clusters
- excludedGenericCount
- exactKeywordCount
- summary
- singlePageReason（只有真单页时）
