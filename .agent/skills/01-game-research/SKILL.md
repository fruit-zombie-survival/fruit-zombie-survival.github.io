---
name: game-research
version: 2.1
description: 对已确认进入建站规划的游戏做轻量、可追溯、低成本的事实调研，为页面规划与内容生成建立 Game Fact Pack。
---

# Game Research Skill

## Knowledge binding

This skill loads bound knowledge via `.agent/knowledge/game-seo-v1/config/skill-bindings.json` for skill id `01-game-research`.
`seo-single-source-of-truth.md` wins over older defaults (including legacy 1200/800 word floors; current floors are homepage **1500** / child **900**).

## 目标

回答：
1. 这是什么游戏？
2. 核心玩法是什么？
3. 有哪些真实存在的核心实体/系统？
4. 哪些事实足以支撑独立 SEO 页面？
5. 哪些信息仍未知？

## 来源优先级

1. 官方游戏平台/官方 API
2. 官方开发者/Creator 页面
3. 高相关 Wiki / Fandom / 专题攻略
4. 搜索结果摘要与其他高相关来源

## 强制要求

- 每个具体事实必须有 sourceIds。
- 具体数字、codes、奖励、版本、日期必须有新鲜来源。
- 来源不够就输出 unknown。
- 不根据游戏名脑补机制。
- 不复制来源长文，只抽事实。
- Research 只服务进入 Planning 的候选，不全量运行。

## 输出

严格输出 GameFactPack Schema。
