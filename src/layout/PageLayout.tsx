import * as React from 'react';

interface IProps {
  title: string;
  header?: React.ReactElement;
  footer?: React.ReactElement;
}

const PageLayout: React.FC<IProps> = ({ title, header, footer, children }) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      {header && <header>{header}</header>}
      {children}
      {footer && <footer>{footer}</footer>}
    </>
  );
};

export default PageLayout;
