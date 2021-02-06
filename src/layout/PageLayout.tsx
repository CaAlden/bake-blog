import * as React from 'react';
import { css } from '@emotion/css';
import Header from './Header';

interface IProps {
  title: string;
}

const fillPageClassName = css({
  width: '100vw',
  height: '100vh',
});

const PageLayout: React.FC<IProps> = ({
  title,
  children,
}) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className={fillPageClassName}>
      <Header />
      {children}
    </div>
  );
};

export default PageLayout;
