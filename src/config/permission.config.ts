export enum PermissionEnum {
  DASHBOARD = "home",
  USER = "user",
  USER_LIST = "user:list",
  USER_LIST_CREATE = "user:roles:create",
  USER_LIST_EDIT = "user:list:edit",
  USER_LIST_DELETE = "user:list:delete",
  ROLE_ROLES = "user:roles-list",
  USER_ROLES_CREATE = "user:roles:create",
  USER_ROLES_EDIT = "user:roles:edit",
  SER_ROLES_DELETE = "user:roles:delete",
}

type PermissionsTree = {
  label: string;
  value: string;
  children?: Array<PermissionsTree>;
};

export const permissionsTree: Array<PermissionsTree> = [
  { label: "控制台", value: PermissionEnum.DASHBOARD },
  {
    label: "用户",
    value: PermissionEnum.USER,
    children: [
      {
        label: "用户管理",
        value: PermissionEnum.USER_LIST,
        children: [
          { label: "用户创建", value: PermissionEnum.USER_LIST_CREATE },
          { label: "用户编辑", value: PermissionEnum.USER_LIST_EDIT },
          { label: "用户删除", value: PermissionEnum.USER_LIST_DELETE },
        ],
      },
      {
        label: "角色管理",
        value: PermissionEnum.ROLE_ROLES,
        children: [
          { label: "角色创建", value: PermissionEnum.USER_ROLES_CREATE },
          { label: "角色编辑", value: PermissionEnum.USER_ROLES_EDIT },
          { label: "角色删除", value: PermissionEnum.SER_ROLES_DELETE },
        ],
      },
    ],
  },
];
