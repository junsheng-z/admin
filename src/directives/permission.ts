import { useUserStore } from "@/store";
import type { Directive, DirectiveBinding } from "vue";

const hasNotPermission = (value: string) => {
  return (
    useUserStore().currentUser?.data.user.permissions.indexOf(value) === -1
  );
};

export const permissionDirective: Directive = {
  mounted(el: Element, { value }: DirectiveBinding) {
    hasNotPermission(value) && el.parentNode?.removeChild(el);
  },
};
