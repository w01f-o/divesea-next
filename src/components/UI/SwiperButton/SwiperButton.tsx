"use client";

import { FC } from "react";
import swiperButtonStyles from "./swiperButtons.module.scss";
import { clsx } from "clsx";
import Arrow from "@/components/UI/Icons/Arrow";
import { useSwiper } from "swiper/react";

interface SwiperButtonProps {
  className?: string;
  activeIndex: number;
}

const SwiperButton: FC<SwiperButtonProps> = ({ className, activeIndex }) => {
  const swiper = useSwiper();

  const handleClick = (action: "prev" | "next") => (): void => {
    switch (action) {
      case "prev":
        swiper.slidePrev();
        return;
      case "next":
        swiper.slideNext();
        return;
      default:
        return;
    }
  };

  return (
    <div className={clsx(swiperButtonStyles.wrapper, className)}>
      <button
        className={swiperButtonStyles.button}
        onClick={handleClick("prev")}
        disabled={activeIndex === 0}
        type="button"
        title="Previous slide"
      >
        <Arrow active={activeIndex !== 0} orientation="left" />
      </button>
      <span className={swiperButtonStyles.separator}></span>
      <button
        className={swiperButtonStyles.button}
        onClick={handleClick("next")}
        disabled={activeIndex === swiper.slides.length - 1}
        type="button"
        title="Next slide"
      >
        <Arrow
          active={activeIndex !== swiper.slides.length - 1}
          orientation="right"
        />
      </button>
    </div>
  );
};

export default SwiperButton;
