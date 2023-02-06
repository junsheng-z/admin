import type { PaginaTion, Searchable } from "@/api/types";
import type { PageInfo } from "tdesign-vue-next";
import { ref, reactive, onMounted } from "vue";
import type { Ref } from "vue";

export const useSearch = <T, K>(api: Searchable<T>, searchKry: K) => {
  const data = <Ref<Array<T>>>ref<Array<T>>([]);

  const pagination = reactive<PaginaTion>({
    current: 1,
    pageSize: 5,
    total: 50,
  });

  const Loading = ref(false);

  const fetchDate = () => {
    Loading.value = true;
    api
      .list({
        page: pagination.current,
        perPage: pagination.pageSize,
        ...searchKry,
      })
      .then((res) => {
        data.value = res.data.userList;
        Loading.value = false;
      })
      .catch((error) => {
        Loading.value = true;
        throw new Error(error);
      });
  };
  onMounted(() => {
    fetchDate();
  });

  const onPageChange = (pageInfo: PageInfo) => {
    pagination.current = pageInfo.current;
    pagination.pageSize = pageInfo.pageSize;
    fetchDate();
  };

  return {
    data,
    pagination,
    Loading,
    fetchDate,
    onPageChange,
  };
};
