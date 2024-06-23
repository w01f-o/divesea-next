import { FC } from "react";
import nfrStyles from "./nft.module.scss";

interface NftProps {}

const Nft: FC<NftProps> = ({}) => {
  return <div className={nfrStyles.nft}></div>;
};

export default Nft;
