// components/If.tsx
import React from 'react';

type IfProps = {
  condition: boolean;
  then: React.ReactNode;
  else?: React.ReactNode;
};

export const If: React.FC<IfProps> = ({condition, then, else: else_}) => {
  return <>{condition ? then : else_ || null}</>;
};
