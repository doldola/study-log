import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// `src/content/blog/`의 md/mdx를 불러온다. 단, '_'로 시작하는 파일(_template.md 등)은 제외.
	loader: glob({ base: './src/content/blog', pattern: '**/[!_]*.{md,mdx}' }),
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
		}),
});

export const collections = { blog };
