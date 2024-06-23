import { Dispatch, FC, SetStateAction } from "react";
import accordionStyles from "./accordion.module.scss";
import { IAccordionItem } from "@/types/accordionItem.type";
import { clsx } from "clsx";

interface AccordionItemProps {
  openId: number;
  setOpenId: Dispatch<SetStateAction<number>>;
  item: IAccordionItem;
}

const AccordionItem: FC<AccordionItemProps> = ({ item, openId, setOpenId }) => {
  const handleClick = (): void => {
    setOpenId(item.id === openId ? 0 : item.id);
  };

  return (
    <div
      className={clsx(accordionStyles.item, {
        [accordionStyles.collapse]: item.id === openId,
      })}
    >
      <button onClick={handleClick}>{item.title}</button>
      <div className={accordionStyles.body}>
        <div className={accordionStyles.content}>{item.content}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
