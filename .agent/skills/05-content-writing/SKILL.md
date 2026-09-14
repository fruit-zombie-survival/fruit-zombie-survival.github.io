---
name: game-content-writing
version: 2.2
description: 基于完整 Fact Pack、页面计划和站点上下文生成可直接预览的游戏 SEO 页面正文。
---

# Game Content Writing Skill

## Knowledge binding

This skill loads bound knowledge via `.agent/knowledge/game-seo-v1/config/skill-bindings.json` for skill id `05-content-writing`.
`seo-single-source-of-truth.md` wins over older defaults (including legacy 1200/800 word floors; current floors are homepage **1500** / child **900**).

Bound files include helpful-content, intent-first writing, information gain, page-type templates, frontend-copy-boundary, and fact-pack rules.

## 输入

- Approved Site Plan
- SEO Plan
- Game Fact Pack
- Source Pack

## 规则

- 只使用可追溯事实。
- 不复制来源原文。
- 多来源综合后重写。
- 不编造 codes/stats/rewards/dates。
- 未知事实用保守措辞，不输出工程 TODO 给终端用户。
- 遵守 frontend-copy-boundary：公开文案不得出现 confidence / sourceId / QA / 研究过程语言。
- 每页达到 minWordCount（首页 >=1500，子页 >=900）；禁止用重复句凑字数。
- 每页真正回答自己的 Search Intent。
- 页面之间内容不能大面积重复。
- 按 page-type modules 组织必要模块。
- 先做页面计划再写 section：每个 section 只负责一个角度和一组专属 facts；全页只允许一个 section 完整解释核心玩法/游戏前提，其余 section 不再复述。
- 导语与 FAQ 必须由模型基于 facts 撰写；FAQ 答案不得复述问题、不得用 ID 或单句事实充数，无法回答的问题直接删除。
- 兄弟页面已覆盖的事实只做一句引用并指向该页，不重复展开。
- 缺失事实用一句话说明未知即可，禁止 "Not specified" 之类占位条目。

## 输出

Content Pack：
- lead
- sections
- lists/tables
- FAQ answers
- usedSourceIds
- unresolved facts
