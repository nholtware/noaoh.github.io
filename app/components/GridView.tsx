import {FC, PropsWithChildren} from 'react';

interface GridViewProps {
  className?: string;
}

const GridView: FC<PropsWithChildren<GridViewProps>> = ({children, className = ''}) => {
  return (
    <div className={`mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 ${className}`}>
      {children}
    </div>
  );
};

export default GridView;
