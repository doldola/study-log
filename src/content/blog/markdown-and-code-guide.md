---
title: '마크다운과 코드 블록 스타일 가이드'
description: '글에서 자주 쓰는 마크다운 문법과 코드 하이라이팅이 실제로 어떻게 보이는지 모아 둔 참고용 글.'
pubDate: '2026-06-25'
heroImage: '../../assets/blog-placeholder-4.jpg'
tags: ['가이드', '마크다운']
series: '블로그 가이드'
seriesOrder: 2
---

이 글은 블로그에서 자주 쓰는 마크다운 요소가 실제로 어떻게 렌더링되는지 보여 주는 참고용 글이다.

## 텍스트

본문에서는 **굵게**, *기울임*, `인라인 코드`, 그리고 [링크](https://astro.build/)를 쓸 수 있다.

## 목록

- 순서 없는 항목
- 중첩도 가능
  - 들여쓴 항목

1. 순서 있는 항목
2. 두 번째 항목

## 인용

> 인용문은 이렇게 보인다. 막혔던 문제의 핵심 메모를 강조할 때 유용하다.

## 코드 블록

언어를 지정하면 문법 하이라이팅이 적용된다.

```ts
type Result<T> = { ok: true; value: T } | { ok: false; error: string };

function parse(json: string): Result<unknown> {
  try {
    return { ok: true, value: JSON.parse(json) };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}
```

```bash
# 셸 명령도 깔끔하게 보인다
npm run dev
```

## 표

| 필드 | 설명 | 필수 |
| --- | --- | --- |
| title | 글 제목 | O |
| pubDate | 작성일 | O |
| tags | 분류 태그 | X |
