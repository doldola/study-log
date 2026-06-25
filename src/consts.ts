// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'study-log';
export const SITE_DESCRIPTION = '공부하며 배운 것과 PoC 실험을 기록하는 개발 블로그';

// GitHub Pages 프로젝트 사이트(하위 경로)에서도 내부 링크가 깨지지 않도록
// base 경로('/study-log')를 앞에 붙여 준다. BASE_URL의 후행 슬래시 유무와
// 무관하게 항상 올바른 경로를 만든다.
export function withBase(path = '/') {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	const clean = path.startsWith('/') ? path : `/${path}`;
	return `${base}${clean}`;
}
