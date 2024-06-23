import { FC, useState } from "react";
import AccordionItem from "@/components/Shared/Accordion/AccordionItem";
import accordionStyles from "./accordion.module.scss";

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: FC<AccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<number>(0);

  return (
    <div className={accordionStyles.accordion}>
      {items.map((item) => (
        <AccordionItem
          item={item}
          key={item.id}
          openId={openId}
          setOpenId={setOpenId}
        />
      ))}
    </div>
  );
};

export default Accordion;
