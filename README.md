# study-log

공부하며 배운 것과 PoC를 기록하는 개발 블로그. [Astro](https://astro.build/)로 만들었고 [Vercel](https://vercel.com/)로 자동 배포된다.

## 로컬 실행

```bash
npm install      # 최초 1회
npm run dev      # http://localhost:4321
```

## 글 추가

`src/content/blog/` 아래에 `.md` 파일을 만들고 프런트매터(`title`, `description`, `pubDate` 필수)를 작성한다. 자세한 방법은 블로그의 「새 글 작성과 자동 배포 워크플로」 글 참고.

## 배포

`main` 브랜치에 push 하면 Vercel이 자동으로 빌드·배포한다.

```bash
git add .
git commit -m "post: 새 글 추가"
git push
```

## 명령어

| 명령 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | `dist/`에 정적 빌드 |
| `npm run preview` | 빌드 결과 로컬 미리보기 |
