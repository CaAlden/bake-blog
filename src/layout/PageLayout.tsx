import * as React from 'react';
import { css } from '@emotion/css';
import Header from './Header';
import { Colors } from '../utils/Colors';

interface IProps {
  title: string;
}

const fillPageClassName = css({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexGrow: 1,
  background: Colors.White,
  flexDirection: 'column',
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
