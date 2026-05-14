import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="relative max-w-201.75 md:max-w-268.75 lg:max-w-283 xl:max-w-342.5 w-[92%] lg:w-[90%] mx-auto">
      {children}
    </div>
  );
};

export default Container;
