import * as React from "react";
import { Colors } from "../../utils/Colors";
import { css } from "@emotion/css";
import { Link, useRouteMatch } from "react-router-dom";

interface INavigationItem {
  label: string;
  to: string;
}

interface IProps {
  items: INavigationItem[];
}

const navClass = css({
  display: "flex",
  alignItems: "center",
});

const headerItemStyles = {
  padding: '5px',
  color: Colors.White,
  fontSize: '1.25em',
};
const headerLinkClass = css({
  ...headerItemStyles,
  textDecoration: 'none',
  ":visited": {
    color: Colors.White,
  },
  ":active": {
    color: Colors.Secondary,
  },
});
const activeHeaderItemClass = css({
  ...headerItemStyles,
  fontWeight: 'bold',
});

const Navigation = ({ items }: IProps) => {
  const route = useRouteMatch();
  return (
    <nav className={navClass}>
      {items.map(({ label, to }) =>
        to === route.path ? (
          <span className={activeHeaderItemClass}>{label}</span>
        ) : (
          <Link className={headerLinkClass} to={to} key={to}>
            {label}
          </Link>
        )
      )}
    </nav>
  );
};

export default Navigation;
