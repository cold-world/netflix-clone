import React from 'react';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string | undefined;
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

function Heading({ text, tag, ...props }: HeadingProps) {
  const HeadingTag = tag;
  return <HeadingTag {...props}>{text}</HeadingTag>;
}

export default Heading;
