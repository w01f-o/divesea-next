import { User } from "@/types/user.type";

export interface INft {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  author: Pick<User, "id" | "name" | "avatar">;
  owner: Pick<User, "id" | "name" | "avatar">;
  endsAt: string;
}
