<template>
  <t-dialog
    :visible="visible"
    header="visual数据管理"
    width="500px"
    @confirm="handleConfirm"
    @close="$emit('close1')"

  >
    <div>
      <t-form ref="form" :data="CardData" :rules="rules">
        <t-form-item label="icon" name="icon">
          <t-input
            v-model="CardData.icon"
            type="icon"
            placeholder="请输入icon"
          ></t-input>
        </t-form-item>
        <t-form-item label="主题" name="title">
          <t-input
            v-model="CardData.title"
            type="title"
            placeholder="请输入主题"
          ></t-input>
        </t-form-item>
        <t-form-item label="颜色" name="color">
          <t-input v-model="CardData.color" placeholder="请输入颜色"></t-input>
        </t-form-item>
        <t-form-item label="数据" name="number">
          <t-input v-model="CardData.number" placeholder="请输入数据"></t-input>
        </t-form-item>
        <t-form-item label="单位" name="unit">
          <t-input v-model="CardData.unit" placeholder="请输入单位"></t-input>
        </t-form-item>
      </t-form>
    </div>
  </t-dialog>
</template>

<script setup lang="ts">
import type { CardType } from "@/api/types";
import { ref, computed, watch } from "vue";


interface Props {
  show: boolean;
  data: CardType | null;
}
// const visible = ref(true);
const formData: CardType = {
  icon: "",
  title: "",
  color: "",
  number: "",
  unit: "",
};

const rules = {
  icon: [{ required: true, message: "icon必填", type: "error" }],
  title: [{ required: true, message: "主题必填", type: "error" }],
  color: [{ required: true, message: "颜色必填", type: "error" }],
  number: [{ required: true, message: "数据必填", type: "error" }],
  unit: [{ required: true, message: "单位必填", type: "error" }],
};

const props = withDefaults(defineProps<Props>(), {
  show: true,
});
const emit = defineEmits(["close", "onConfirm"]);
const handleConfirm = () => {
  emit("onConfirm", CardData.value);
};
const visible = computed(() => props.show);
const CardData = ref(formData || props.data);
watch(props, (newValue) => {
  CardData.value = newValue.data || formData;
});
</script>
<style scoped></style>
