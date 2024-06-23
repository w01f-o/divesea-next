import { INft } from "@/types/nft.type";

export interface User {
  id: number;
  name: string;
  login: string;
  totalSales: number;
  followers: number;
  following: number;
  avatar: string;
  bio: string;
  collections: INft[];
}
