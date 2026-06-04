/**
 * slugify — 섹션 이름을 URL 슬러그로 변환
 *
 * @param {string} text - 변환할 텍스트
 * @returns {string} URL-safe 슬러그
 *
 * Example:
 * slugify('Arrays & Objects') → 'arrays-objects'
 * slugify('ES6+')             → 'es6'
 * slugify('React + TypeScript') → 'react-typescript'
 */
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
