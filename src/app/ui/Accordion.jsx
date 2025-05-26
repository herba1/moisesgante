"use client";
import { ChevronDown } from "lucide-react";
import { Subtitle } from "./Headings";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ConfigResolutionError } from "sanity";

export function AccordionItem({
  className = "",
  question = "This should be question",
  answer = "This should be answer",
  classNameAnswer = "",
}) {
  // we expect a question and answer
  const container = useRef();
  const tl = useRef();
  const { contextSafe } = useGSAP(() => {
    let dropdown = container.current.querySelector(".accordion__dropdown");
    let chevron = container.current.querySelector(".accordion__chevron");
    tl.current = gsap.timeline({ paused: true });
    tl.current
      .to(
        dropdown,
        {
          height: "auto",
          ease: " power4.out ",
          duration: 0.2,
        },
        0
      )
      .to(
        chevron,
        {
          rotate: -180,
          ease: " power4.out ",
          duration: 0.2,
        },
        0
      );
  });

  const toggle = contextSafe(() => {
    console.log("i was clicked");
    if (tl.current.progress() > 0) {
      close();
    } else {
      open();
    }
  });
  const open = contextSafe(() => {
    tl.current.play();
  });
  const close = contextSafe(() => {
    tl.current.reverse();
  });

  return (
    <li ref={container} className="accordion__item py-small  ">
      <div onClick={toggle} className="flex justify-between">
        <span className=" text-lg font-medium xl:text-2xl  italic">
          {question}
        </span>
        <ChevronDown className=" accordion__chevron"></ChevronDown>
      </div>
      <div className=" accordion__dropdown  h-0 overflow-clip xl:text-lg  ">
        <p className=" p-small ">{answer}</p>
      </div>
    </li>
  );
}

export default function Accordion({
  title = "Accordion",
  data,
  className = "",
}) {
  const container = useRef();
  const tl = useRef();

  // array of obj of qna {question, answer} as data
  const items = data.map((item) => {
    console.log(item);
    return (
      <AccordionItem
        className="accordion__item__animate"
        key={item.question}
        question={item.question}
        answer={item.answer}
      ></AccordionItem>
    );
  });

  useGSAP(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "top 80%",
      },
    });
    gsap.fromTo(".accordion__item__animate", { opacity: 0 }, { opacity: 1 });
  },{scope:container.current});

  return (
    <div
      ref={container}
      className={`accordion__container col-span-2 touch-manipulation ${className}`}
    >
      <Subtitle text={title}></Subtitle>
      <ul className=" flex flex-col items-stretch gap-small divide-primary border-primary border-x-0 border-y-2 divide-y-2 divide-solid   ">
        {items}
      </ul>
    </div>
  );
}
