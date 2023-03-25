import React from 'react';

type ConditionalRenderingType = {
  condition: boolean;
  children: React.ReactNode;
};

const ConditionalRendering: React.FC<ConditionalRenderingType> = ({ condition, children }) => {
  if (condition) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return <React.Fragment />;
};

export default ConditionalRendering;
