import { FC, useState } from "react";
import { IAccordionItem } from "@/types/accordionItem.type";
import AccordionItem from "./AccordionItem";
import accordionStyles from "./accordion.module.scss";

interface AccordionProps {
  items: IAccordionItem[];
}

const Accordion: FC<AccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<number | null>(0);

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
