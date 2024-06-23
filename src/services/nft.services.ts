import { INft } from "@/types/nft.type";

export class NftServices {
  public static async getNfts(): Promise<INft[]> {
    return [
      {
        id: 1,
        name: "NFT1",
        image: "/images/nft1.png",
        price: 0.01,
        endsAt: "1 day left",
        author: { id: 2, name: "author1", avatar: "/images/author1.png" },
        owner: { id: 1, name: "owner1", avatar: "/images/owner1.png" },
        description: "NFT description",
      },
      {
        id: 2,
        name: "NFT1",
        image: "/images/nft1.png",
        price: 0.01,
        endsAt: "1 day left",
        author: { id: 4, name: "author1", avatar: "/images/author1.png" },
        owner: { id: 1, name: "owner1", avatar: "/images/owner1.png" },
        description: "NFT description",
      },
      {
        id: 3,
        name: "NFT1",
        image: "/images/nft1.png",
        price: 0.01,
        endsAt: "1 day left",
        author: { id: 6, name: "author1", avatar: "/images/author1.png" },
        owner: { id: 4, name: "owner1", avatar: "/images/owner1.png" },
        description: "NFT description",
      },
      {
        id: 4,
        name: "NFT1",
        image: "/images/nft1.png",
        price: 0.01,
        endsAt: "1 day left",
        author: { id: 6, name: "author1", avatar: "/images/author1.png" },
        owner: { id: 4, name: "owner1", avatar: "/images/owner1.png" },
        description: "NFT description",
      },
    ];
  }
}
