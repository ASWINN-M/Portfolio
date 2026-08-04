/** Prefix a public asset path with the Vite base URL (needed for GitHub Pages). */
export const asset = (path = '') => {
  const normalized = String(path).replace(/^\/+/, '');
  return `${import.meta.env.BASE_URL}${normalized}`;
};
