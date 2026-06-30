import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// `src/content/blog/` 바로 아래의 md/mdx만 글로 읽는다.
	// '_'로 시작하는 파일(_template.md)과 하위 폴더(예: Obsidian 보관함)는 제외 → 잡 노트에 빌드가 깨지지 않음.
	loader: glob({ base: './src/content/blog', pattern: '[!_]*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// 글 분류용 태그 (예: ['공부', 'PoC', 'TypeScript'])
			tags: z.array(z.string()).default([]),
			// 초안 여부. true면 프로덕션 배포에서 숨김(로컬 dev에서는 보임).
			draft: z.boolean().default(false),
			// 시리즈(연재) 제목. 같은 값을 가진 글끼리 묶여 시리즈 내비게이션이 표시됨.
			series: z.string().optional(),
			// 시리즈 내 순서(작을수록 앞). 없으면 작성일 순으로 정렬.
			seriesOrder: z.number().optional(),
		}),
});

export const collections = { blog };
