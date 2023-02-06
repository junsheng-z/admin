export type TokenRequest = {
  email: string;
  username: string;
  password: string;
};

export type ErrorResponse = {
  code: number;
  msg: string;
};

export type UserType = {
  _id?: string;
  email: string;
  username: string;
  // password?: string;
  gender?: string;
  permissions?: Array<void>;
  roles?: Array<void>;
  employments?: Array<void>;
  headline?: string;
  data?: any;
};
// export type CreateToken = {
//     token: string
// }

export interface Paging {
  page: number;
  perPage: number;
  // total: number;
}
//分页属性
export interface PaginaTion {
  current: number;
  pageSize: number;
  total?: number;
}
//搜索分页
export interface PaginaTionName extends Paging {
  keyword: string;
}

interface userlist<T> {
  userList: Array<T>;
}

export type ListResult<T> = {
  // Paging: Paging;
  data: userlist<T>;
};

export interface Searchable<T> {
  list(filter: object): Promise<ListResult<T>>;
}

//创建用户
export interface UserCreateREquest {
  username: string;
  password: string;
  email: string;
  roles?: Array<void>;
}
//编辑用户
export interface UserCreateEdit extends UserCreateREquest {
  _id: string;
}

export interface UserEdit extends UserType {
  _id?: string;
  password?: string;
}

export interface Editable<R, T> {
  createPatch(request: R): Promise<T>;
  editDelete(id: string): Promise<T>;
  edit(id: string, request: R): Promise<T>;
}

//角色管理
export interface RolesFilter extends Paging {
  name: string;
  permissions?: Array<string>;
  roles?: Array<string>;
}

//Card 首页可视化页面
export interface Info {
  icon: string;
  title: string;
  color: string;
  number: number;
  unit: string;
}
export interface CardType {
  icon?: string;
  title: string;
  color: string;
  number: string;
  unit: string;
  data?: Array<Info>;
  _id?: string;
}

//Card管理
export interface cardPage {
  page: number;
  perPage: number;
}

export interface EditCard<R, CardType> {
  card():Promise<CardType>;
  createPatch(request: R): Promise<CardType>;
  cardDelete(id: string): Promise<CardType>;
  edit(id: string, request: R): Promise<CardType>;

}
export interface Searchable<T> {
  list(filter: object): Promise<ListResult<T>>;
}
