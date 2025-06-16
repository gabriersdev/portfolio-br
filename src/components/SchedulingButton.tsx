"use client";

import {about} from "@/app/resources";
import {Button, Flex, Icon} from "@/once-ui/components";
import styles from "@/components/about/about.module.scss";
import React, {useEffect, useState} from "react";
import AnimatedComponents from "@/components/animated-components/animated-componets";

export default function SchedulingButton({variant}: { variant?: string }) {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [latestRender, setLatestRender] = useState<number>();

  useEffect(() => {
    setLatestRender(new Date().getTime());

    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setLatestRender(new Date().getTime());
    })
  }, []);

  if (about.schedule.display) {
    if (variant === "primary") {
      return (
        <Button
          id="schedule"
          data-border="rounded"
          href={about.schedule.link}
          variant="primary"
          size="l"
        >
          <Flex gap="4" vertical="center">
            <Icon
              style={{marginLeft: "-0.75rem", marginRight: "0.25rem", border: "none"}}
              paddingLeft="8" name="calendar" onBackground="info-weak"
            />
            {"Schedule a call"}
          </Flex>
        </Button>
      )
    }

    return (
      <a style={{textDecoration: "none"}} href={about.schedule.link}>
        <div style={
          width < 769 ? {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          } : {}
        }>
          <Flex
            fitWidth
            border="brand-alpha-medium"
            className={styles.blockAlign}
            style={{
              backdropFilter: "blur(var(--static-space-1))",
            }}
            background="brand-alpha-weak"
            radius="full"
            padding={variant === "home" ? "8" : "4"}
            gap="8"
            marginBottom={variant === "home" ? "0" : "m"}
            vertical="center"
          >
            <Icon paddingLeft="8" name="calendar" onBackground="brand-weak"/>
            <Flex paddingRight="8">Schedule a call</Flex>
          </Flex>
        </div>
      </a>
    )
  } else return null
}
