import type {
  ListResult,
  UserCreateEdit,
  UserCreateREquest,
  UserEdit,
  UserType,
  RolesFilter,
} from "./types";
import request from "@/api/request";

const list = (filter: RolesFilter): Promise<ListResult<UserEdit>> => {
    console.log(filter)
  return request.get("/user/", {
    params: filter,
  });
};

const createPatch = (
  rolesCreateRequest: UserCreateREquest
): Promise<UserEdit> => {
  return request.post("/user/", rolesCreateRequest);
};

//编辑
const edit = (
  id: string,
  rolesEditRequest: UserCreateEdit
): Promise<UserType> => {
  return request.patch(`/user/${id}`, rolesEditRequest);
};

export default {
  list,
  createPatch,
  edit,
};
