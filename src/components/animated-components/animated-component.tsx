'use client';

import { useTransition, animated } from '@react-spring/web';
import React from 'react';

export default function AnimatedComponent({ children, delay }: { children: React.ReactNode, delay?: number }) {
  const transitions = useTransition(children, {
    from: { opacity: 0, transform: 'translateY(10px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-10px)' },
    config: { tension: 210, friction: 20 },
    delay: delay || 0,
  });

  return (
    <>
      {transitions((style, item) => (
        <animated.div style={style}>{item}</animated.div>
      ))}
    </>
  );
}
