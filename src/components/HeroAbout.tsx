"use client";

import {useEffect, useState} from "react";
import {Heading, Text} from "@/once-ui/components";
import styles from "@/components/about/about.module.scss";
import {person} from "@/app/resources";

export function HeroAbout() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [latestRender, setLatestRender] = useState<number>();

  useEffect(() => {
    setLatestRender(new Date().getTime());

    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setLatestRender(new Date().getTime());
    })
  }, []);

  return (
    <>
      <Heading className={styles.textAlign} variant="display-strong-m" paddingTop={width < 769 ? "m" : "2"} style={{fontWeight: 800}}>
        {person.name}
      </Heading>

      <Text
        className={styles.textAlign}
        variant="heading-strong-l"
        onBackground="brand-medium"
        marginBottom={"xs"}
        // style={{fontWeight: 500}}
      >
        {person.role}
      </Text>
    </>
  )
}
