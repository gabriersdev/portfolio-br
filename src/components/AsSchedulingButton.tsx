"use client";

import {about} from "@/app/resources";
import {Flex, Icon} from "@/once-ui/components";
import styles from "@/components/about/about.module.scss";
import React, {useEffect, useState} from 'react';

export default function SchedulingButton({variant, duration}: { variant?: string, duration?: number }) {
  const [visible, setVisible] = useState(false);

  if (!duration) duration = 1000;

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 10); // pequeno delay para o efeito funcionar
    return () => clearTimeout(timeout);
  }, []);

  const style = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: visible ? 1 : 0,
  };

  if (about.calendar.display) {
    return (
      <div style={style}>
        <a style={{textDecoration: "none"}} href={"#"}>
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
            <Flex paddingRight="8">Agendar uma chamada</Flex>
          </Flex>
        </a>
      </div>
    )
  } else return null
}
