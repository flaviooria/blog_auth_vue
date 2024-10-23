import type { User } from "./user_interface";

export interface SignInInterface extends Pick<User, "email" | "password"> {}
