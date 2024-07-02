import { User } from "./User.interface";

export interface CheckTokenResponse {
    user: User;
    token: string;
}