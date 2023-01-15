import "./SkillSlider.css";
import { useTransition } from "react-transition-state";
import { useRef, useLayoutEffect, useState, useEffect } from "react";

interface IProps {
  skill: string;
  skillLevel: number;
}

export const SkillSlider = ({ skill, skillLevel }: IProps) => {
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     //@ts-ignore
  //     ref.current.style.width = `${skillLevel}%`;
  //   }
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      if ((window.scrollY > 290 || window.screenY > 290) && ref.current) {
        //@ts-ignore
        ref.current.style.width = `${skillLevel}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={"skillslider-container"}>
        <span>{skill}</span>
        <div className={"skillslider-box-background"}>
          <div
            ref={ref}
            className={"skillslider-box-skillLevel"}
            style={{
              width: 0,
              transition: "width 1s",
            }}
          />
        </div>
      </div>
    </>
  );
};
