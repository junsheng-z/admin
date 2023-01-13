import type { UserType } from "./types"
import request from "@/api/request"

const me = (): Promise<UserType> => {
    return request.get("/user/636bb5128f78961efebfa116?fields=employments")
}

export default {
    me,
}