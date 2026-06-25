---
title: '새 글 작성과 자동 배포 워크플로'
description: '마크다운 파일 하나를 추가하고 git push 한 번으로 블로그에 글이 올라가는 과정을 정리한다.'
pubDate: '2026-06-25'
heroImage: '../../assets/blog-placeholder-2.jpg'
tags: ['가이드', 'Astro', '배포']
---

새 글을 올리는 과정은 마크다운 파일 하나를 만들고 git에 push 하는 것이 전부다.

## 1. 새 글 파일 만들기

`src/content/blog/` 아래에 `.md`(또는 `.mdx`) 파일을 만든다. 파일 이름이 그대로 URL 경로가 된다. 예를 들어 `my-first-poc.md`는 `/blog/my-first-poc/`로 열린다.

## 2. 프런트매터 작성

파일 맨 위에 `---`로 감싼 메타데이터(프런트매터)를 적는다.

```yaml
---
title: '글 제목'
description: '목록과 SNS 미리보기에 쓰이는 한 줄 요약'
pubDate: '2026-06-25'
heroImage: '../../assets/blog-placeholder-1.jpg'  # 선택
tags: ['공부', 'TypeScript']                       # 선택
updatedDate: '2026-06-26'                          # 선택, 수정일
---
```

- `title`, `description`, `pubDate`는 필수다.
- `heroImage`는 `src/assets/`에 이미지를 넣고 상대 경로로 가리킨다. 생략 가능.
- `tags`로 글을 분류한다. (예: `공부`, `PoC`)

## 3. 본문 작성

프런트매터 아래에 마크다운으로 본문을 쓴다. 코드 블록, 표, 이미지를 모두 지원한다. 마크다운 문법과 코드 하이라이팅이 어떻게 보이는지는 「마크다운과 코드 블록 스타일 가이드」 글에서 확인할 수 있다.

## 4. 로컬에서 미리보기

```bash
npm run dev
```

`http://localhost:4321`에서 글을 미리 본다. 파일을 저장하면 즉시 반영된다.

## 5. 배포

변경 사항을 커밋하고 push 하면 끝이다.

```bash
git add .
git commit -m "post: 새 글 추가"
git push
```

`main` 브랜치에 push 되는 순간 GitHub Actions가 자동으로 빌드해 GitHub Pages로 배포한다. 보통 1~2분 안에 사이트에 반영되며, 별도의 배포 명령은 필요 없다. 진행 상황은 저장소의 Actions 탭에서 확인할 수 있다.
