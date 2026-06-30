---
title: '집에서 구축하는 LLMOps (3) — OpenAI 호환 게이트웨이로 라우팅'
description: 'LiteLLM으로 로컬·클라우드 모델을 하나의 OpenAI 호환 API 뒤에 모으고, 모델 라우팅과 폴백을 구성한다.'
pubDate: '2026-06-30'
tags: ['PoC', 'LLMOps', 'Gateway']
series: '집에서 구축하는 LLMOps'
seriesOrder: 3
draft: true
---

## TL;DR

TODO

## 배경 / 문제

모델·엔드포인트가 늘어나면 앱마다 직접 붙이기 번거롭다. 하나의 API로 통일하고 싶다.

## LiteLLM 게이트웨이 띄우기

- TODO: 설정 파일(모델 목록) 작성
- TODO: 서버 실행, OpenAI SDK로 호출

```yaml
# TODO: litellm config
```

## 라우팅 / 폴백 / 비용 제한

- TODO: 모델 별칭, 라우팅 규칙
- TODO: 폴백(한 모델 실패 시 다른 모델)
- TODO: 사용량/예산 제한

## 막힌 점 / 한계

- TODO

## 다음 편

오가는 요청을 들여다보는 관측성.
