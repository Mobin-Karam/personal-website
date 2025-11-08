export interface BlogCardProps {
  [x: string]: Key | null | undefined;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  thumbnail?: string;
}
