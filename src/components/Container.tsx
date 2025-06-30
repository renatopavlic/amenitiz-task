import { type PropsWithChildren } from 'react';

const Container = (props: PropsWithChildren) => {
  return <div className="p-4 w-full max-w-[1084px] mx-auto">{props.children}</div>;
};

export default Container;
