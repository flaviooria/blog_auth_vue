import type { User } from "./user_interface";

export interface SignUpInterface extends Omit<User, "id"> {}
