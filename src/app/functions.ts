export function getRandomColor(): string {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export function generateUrlLink(url: string, title: string): string {
  const baseUrl = `${url}/`;
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  console.log(baseUrl + slug);
  return baseUrl + slug;
}

export function formatForCheckLink(input: string): string {
  return input
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]+/g, ''); // Remove non-word chars
}
