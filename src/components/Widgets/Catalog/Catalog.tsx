import { FC } from "react";
import { NftServices } from "@/services/nft.services";
import Nft from "@/components/Entities/Nft/Nft";
import { INft } from "@/types/nft.type";
import { Col, Container, Row } from "@w01f-o/react-grid-layout";

const Catalog: FC = async () => {
  const nfts: INft[] = await NftServices.getNfts();

  return (
    <Container>
      <Row>
        {nfts.map((nft) => (
          <Col key={nft.id} lg={3}>
            <Nft nft={nft} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Catalog;
