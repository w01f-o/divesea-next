import { NextPage } from "next";
import Catalog from "@/components/Widgets/Catalog/Catalog";

export const generateMetadata = () => {
  return {
    title: "Discover",
  };
};

const Discover: NextPage = () => {
  return (
    <>
      <Catalog />
    </>
  );
};

export default Discover;
