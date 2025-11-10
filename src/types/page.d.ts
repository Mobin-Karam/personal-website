// src/types/page.d.ts
export interface PageSection {
  id: string;
  title: string;
  content: string;
  order: number;
  visible: boolean;
}

export interface Page extends BaseEntity {
  title: string;
  slug: string;
  sections: PageSection[];
  metaTitle?: string;
  metaDescription?: string;
  isPublished: boolean;
}
