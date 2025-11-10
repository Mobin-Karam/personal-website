// src/types/blog.d.ts
export interface BlogCategory extends BaseEntity {
  name: string;
  slug: string;
  description?: string;
}

export interface BlogPost extends BaseEntity {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  coverImage?: string;
  authorId: string;
  categoryId?: string;
  tags?: string[];
  published: boolean;
  publishedAt?: string;
  views: number;
}

export interface BlogComment extends BaseEntity {
  postId: string;
  userId: string;
  content: string;
  approved: boolean;
}

export interface BlogStats {
  totalPosts: number;
  totalViews: number;
  totalComments: number;
}
