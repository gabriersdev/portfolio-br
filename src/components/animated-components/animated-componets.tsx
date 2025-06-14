'use client';

import React from "react";
import AnimatedComponent from "@/components/animated-components/animated-component";

export default function AnimatedComponents({ children, delay }: { children: React.ReactNode, delay?: number }) {
  const childArray = React.Children.toArray(children);

  return (
    <>
      {childArray.map((child, index) => (
        <AnimatedComponent key={index} delay={delay}>
          {child}
        </AnimatedComponent>
      ))}
    </>
  );
}
