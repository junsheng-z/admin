import type { Editable, UserEdit } from "@/api/types";
import { MessagePlugin, type CellData } from "tdesign-vue-next";
import { ref } from "vue";
import type { Ref } from "vue";
export const useEditDialog = <T extends { _id: string }, R>(
  api: Editable<R, T>,
  modelLabel: string = ""
) => {
  const showDialog = ref(false);
  const editData = <Ref<T | null>>ref(null);
  //打开创建框
  const handleCreate = () => {
    showDialog.value = true;
  };

  const handleEdit = (item: CellData<T>) => {
    editData.value = item.row;
    showDialog.value = true;
  };

  //删除
  const handleDelete = async (item: CellData<T>) => {
    if (item.row._id !== "") {
      await api.editDelete(item.row._id);
      await MessagePlugin.success(`删除成功`);
    } else {
      await MessagePlugin.error(`删除有误,请检查`);
    }
  };

  const handleConfirm = async (data: R) => {
    if (editData.value && editData.value._id) {
      await api.edit(editData.value._id, data);
      await MessagePlugin.success(`${modelLabel}编辑成功`);
    } else {
      await api.createPatch(data);
      await MessagePlugin.success(`${modelLabel}创建成功`);
    }

    onDialogClose();
  };

  //关闭 - 提交后数据清空
  const onDialogClose = () => {
    showDialog.value = false;
    editData.value = null;
  };

  return {
    showDialog,
    editData,
    handleCreate,
    handleEdit,
    onDialogClose,
    handleConfirm,
    handleDelete,
  };
};
