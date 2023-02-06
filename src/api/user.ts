import type {
  ListResult,
  PaginaTionName,
  UserCreateEdit,
  UserCreateREquest,
  UserEdit,
  UserType,
} from "./types";
import request from "@/api/request";

const me = (): Promise<UserType> => {
  return request.get("/user/636bb5128f78961efebfa116?fields=employments");
};

const list = (pagination: PaginaTionName): Promise<ListResult<UserEdit>> => {
  return request.get("/user/", {
    params: pagination,
  });
};

const createPatch = (
  userCreateRequest: UserCreateREquest
): Promise<UserEdit> => {
  return request.post("/user/", userCreateRequest);
};

//编辑
const edit = (
  id: string,
  userEditRequest: UserCreateEdit
): Promise<UserType> => {
  return request.patch(`/user/${id}`, userEditRequest);
};

//删除
const editDelete = (id: string): Promise<UserType> => {
  return request.delete(`/user/${id}`);
};

export default {
  me,
  list,
  createPatch,
  edit,
  editDelete,
};
