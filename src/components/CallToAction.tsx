"use client";

import {Flex, Icon, Text} from "@/once-ui/components";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {getDictionary} from "@/app/resources/lang/dictionary";
import {usePathname} from "next/navigation";
import {githubURL} from "@/app/resources/config";

export default function CallToAction({variant}: {variant?: string}) {
  const path = usePathname();
  const [CTG, setCTG] = useState<object | null>(null);
  
  useEffect(() => {
    getDictionary(path).then(data => {
      if (data.CTG) setCTG({...data.CTG});
    });
  }, []);
  
  if (!CTG) return null;
  
  return (
    <Flex background={"brand-weak"} fillWidth={true} border={"brand-weak"} radius={"s"} padding={"s"} gap="8" center={true}>
      <Icon name={"grid"} size={"s"} onBackground={"brand-weak"}/>
      {/*@ts-ignore*/}
      <Text onBackground={"brand-weak"}>{CTG.content} <Link href={variant === "github" ? githubURL : CTG.link.href}>{variant === "github" ? "no Github" : CTG.link.label}</Link></Text>
    </Flex>
  )
}
