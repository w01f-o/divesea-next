import { FC } from "react";
import nftStyles from "./nft.module.scss";
import { INft } from "@/types/nft.type";
import Image from "next/image";
import Button from "@/components/Shared/UI/Button/Button";

interface NftProps {
  nft: INft;
}

const Nft: FC<NftProps> = ({ nft }) => {
  return (
    <div className={nftStyles.nft}>
      <div className={nftStyles.time}>{nft.endsAt}</div>
      <div className={nftStyles.img}>
        <Image src={nft.image} alt={nft.name} width={253} height={253} />
      </div>
      <div className={nftStyles.name}>{nft.name}</div>
      <div className={nftStyles.row}>
        <div className={nftStyles.price}>
          <span>Current bid</span>
          <span>{nft.price}</span>
        </div>
        <Button title={"Place bid"} background={"black"}>
          PLACE BID
        </Button>
      </div>
    </div>
  );
};

export default Nft;
