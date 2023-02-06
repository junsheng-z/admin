import type {

  CardType,
  cardPage,
} from "./types";
import request from "@/api/request";

const card = (): Promise<CardType> => {
  return request.get("/card?page=1&perPage=4");
};


//创建
const createPatch = (CardRequest: CardType): Promise<CardType> => {
  return request.post("/card/", CardRequest);
};

//编辑
const edit = (id: string, userEditRequest: CardType): Promise<CardType> => {
  return request.patch(`/card/${id}`, userEditRequest);
};

//删除
const cardDelete = (id: string): Promise<CardType> => {
  return request.delete(`/card/${id}/questions`);
};

export default {
  card,
  // list,
  createPatch,
  edit,
  cardDelete,
};
