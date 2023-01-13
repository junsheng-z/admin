import request from "@/api/request";
import type { AxiosResponse } from "axios";
import type { TokenRequest } from "./types";

const createToken = (
  tokenRequest: TokenRequest
): Promise<string> => {
  return request.post("/auth", tokenRequest)
};


export default {
    createToken
}