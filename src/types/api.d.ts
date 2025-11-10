// src/types/api.d.ts
export interface BlogAPI {
  getPosts(): Promise<APIResponse<BlogPost[]>>;
  getPost(slug: string): Promise<APIResponse<BlogPost>>;
  createPost(data: BlogPost): Promise<APIResponse<BlogPost>>;
  updatePost(id: string, data: Partial<BlogPost>): Promise<APIResponse<BlogPost>>;
  deletePost(id: string): Promise<APIResponse<null>>;
}

export interface ShopAPI {
  getProducts(): Promise<APIResponse<Product[]>>;
  getProduct(id: string): Promise<APIResponse<Product>>;
  createProduct(data: Product): Promise<APIResponse<Product>>;
  updateProduct(id: string, data: Partial<Product>): Promise<APIResponse<Product>>;
  deleteProduct(id: string): Promise<APIResponse<null>>;
}

export interface UserAPI {
  getUsers(): Promise<APIResponse<User[]>>;
  updateUser(id: string, data: Partial<User>): Promise<APIResponse<User>>;
  deleteUser(id: string): Promise<APIResponse<null>>;
}
