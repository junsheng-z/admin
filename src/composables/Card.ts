import type { Ref } from "vue";
import { ref, onMounted } from "vue";
import type {CardType } from "@/api/types";
import { MessagePlugin } from "tdesign-vue-next";

export const CaredEditDialog = (
  api: { card: any; createPatch: any; edit: any; cardDelete: any },
  modelLabel: string
) => {
  const showDialog = ref(false);
  const editData = <Ref<CardType | null>>ref(null);
  const Loading = ref(true);
  const columns = [
    { colKey: "_id", title: "ID" },
    //   { colKey: "icon", title: "Icon" },
    { colKey: "title", title: "主题" },
    { colKey: "color", title: "颜色" },
    { colKey: "number", title: "数据" },
    { colKey: "unit", title: "单位" },
    { colKey: "operation", title: "操作" },
  ];
  const formData: CardType = {
    icon: "",
    title: "",
    color: "",
    number: "",
    unit: "",
  };
  
  const data = <Ref<Array<CardType>>>ref([]);
  //打开创建框
  const cardbutton = () => {
    showDialog.value = true;
  };
  //   const data = <Ref<T | null>>ref(null);
  //表单数据
  const cardbut = () => {
    Loading.value = true;
    api
      .card()
      .then((res: { data: CardType[] }) => {
        data.value = res.data;
        Loading.value = false;
      })
      .catch((error: string | undefined) => {
        throw new Error(error);
      });
    Loading.value = false;
  };

  const handleCard = (handleCard: { row: CardType | null }) => {
    // console.log(handleCard.row);
    editData.value = handleCard.row;
    showDialog.value = true;
  };
  //确定 handleConfirm
  const handleConfirm = async (data: CardType) => {
    if ((data.color || data.title || data.number) === "") {
      MessagePlugin.error(`必选项目--必须填写`);
      return;
    }
    if (data && data._id) {
      await api.edit(data._id, data);
      await MessagePlugin.success(`${modelLabel}编辑成功`);
      console.log("patch");
    } else {
      console.log(data._id);
      await api.createPatch(data);
      await MessagePlugin.success(`${modelLabel}创建成功`);
    }

    onDialogClose();
  };
  //删除
  const DeleteCard = async (data: { row: { _id: string } }) => {
    if (data.row._id !== "") {
      api.cardDelete(data.row._id);
      await MessagePlugin.success(`${modelLabel}删除成功`);
    } else {
      await MessagePlugin.error(`${modelLabel}删除未知数据失败`);
    }
    cardbut();
  };

  const handle1 = () => {
    showDialog.value = false;
  };

  onMounted(() => {
    cardbut();
  });

  //关闭 - 提交后数据清空
  const onDialogClose = () => {
    showDialog.value = false;
    editData.value = formData;

    console.log("触发了");
  };
  return {
    editData,
    showDialog,
    cardbutton,
    cardbut,
    handleCard,
    handleConfirm,
    handle1,
    columns,
    data,
    DeleteCard,
    onDialogClose,
    Loading,
  };
};
