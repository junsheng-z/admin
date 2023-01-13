export  type TokenRequest  = {
    email: string;
    // username: string;
    password: string;
}

export type ErrorResponse = {
    code: number;
    msg: string;

}

export type UserType = {
    "_id": string;
    "email": string;
    "name": string;
    "gender"?: string;
    "employments"?: Array<void>;
    "headline"?: string;
    "data"?: any;
    // "permissions": Array<string>;
}
// export type CreateToken = {
//     token: string
// }