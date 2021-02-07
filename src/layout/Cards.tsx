import * as React from "react";
import { css } from "@emotion/css";
import { Colors } from "../utils/Colors";
import { Difficulty, Image, NamedLink } from "../../types";
import { Link } from "react-router-dom";

interface IRecipeCardProps {
  recipeLink: NamedLink;
  difficulty: Difficulty;
  description: string;
}

interface IPostCardProps {
  postLink: NamedLink;
  description: string;
  timeEstimate: number;
  publishDate: Date;
}

interface IPostCardPost {
  type: "post";
  props: IPostCardProps;
}
interface IRecipeCardPost {
  type: "recipe";
  props: IRecipeCardProps;
}

export type CardPost = IPostCardPost | IRecipeCardPost;

const getImageClass = (url: string) => css({
  background: "white",
  backgroundImage: `url(${url})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: "absolute",
  right: "calc(50% - 116px)",
  top: "-50px",
  height: "225px",
  width: "225px",
  borderRadius: "50%",
  padding: "5px",
  border: "2px solid rgba(0,0,0, 0.1)",
});
const cardTopContainerClass = css({
  position: "relative",
});
const CardTop: React.FC<{ image: Image, link: NamedLink }> = ({ image, link }) => {
  return (
    <Link to={link.url}>
      <div className={cardTopContainerClass}>
        <img className={getImageClass(link.image.small ?? link.image.medium ?? link.image.large )} />
      </div>
    </Link>
  );
};

const cardContainerClass = css({
  marginTop: "50px",
  width: "300px",
  height: "350px",
  display: "grid",
  gridTemplateRows: "225px 125px",
  gridTemplateColumns: "1fr",
  boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
  background: "white",
});
const cardContentSectionClass = css({
  padding: "5px",
  display: "flex",
});

const CardLayout: React.FC<{
  color: string;
  top: React.ReactNode;
  content: React.ReactNode;
}> = ({ color, top, content }) => {
  return (
    <div className={cardContainerClass}>
      <div style={{ background: color }}>{top}</div>
      <div className={cardContentSectionClass}>{content}</div>
    </div>
  );
};

const contentTitleClass = css({
  margin: 0,
  fontSize: "1.25em",
});
const linkClass = css({
  color: "inherit",
  textDecoration: "none",
  ":visited": {
    color: "inherit",
  },
  ":hover": {
    cursor: "pointer",
  },
});
const cardContentsContainerClass = css({
  display: "grid",
  gridTemplateRows: "1.5fr 1.5fr 1fr",
  flexGrow: 1,
  gap: "5px",
});
const titleSectionClass = css({
  color: Colors.Secondary,
  display: "flex",
  gap: "5px",
  justifyContent: "space-between",
  alignItems: "center",
});
const dateClass = css({
  color: "gray",
  fontSize: "0.8em",
  fontWeight: "lighter",
});
const paragraphClass = css({
  margin: 0,
  fontSize: "0.8em",
  display: "flex",
  alignItems: "center",
});
const footerClass = css({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  fontSize: "0.8em",
});
const detailLabelClass = css({
  fontWeight: "bold",
});

const RecipeContent: React.FC<IRecipeCardProps> = ({
  description,
  recipeLink,
  difficulty,
}) => {
  return (
    <div className={cardContentsContainerClass}>
      <div className={titleSectionClass}>
        <Link to={recipeLink.url} className={linkClass}>
          <h3 className={contentTitleClass}>{recipeLink.name}</h3>
        </Link>
      </div>
      <p className={paragraphClass}>{description}</p>
      <div className={footerClass}>
        <label className={detailLabelClass}>Difficulty: </label>
        <span
          style={{
            color:
              difficulty === Difficulty.Easy
                ? "green"
                : difficulty === Difficulty.Medium
                ? "yellow"
                : "red",
          }}
        >
          {difficulty}
        </span>
      </div>
    </div>
  );
};

export const RecipeCard: React.FC<IRecipeCardProps> = (props) => (
  <CardLayout
    color={Colors.Secondary}
    top={<CardTop image={props.recipeLink.image} link={props.recipeLink} />}
    content={<RecipeContent {...props} />}
  />
);

const PostContent: React.FC<IPostCardProps> = ({
  description,
  postLink,
  timeEstimate,
  publishDate,
}) => {
  return (
    <div className={cardContentsContainerClass}>
      <div className={titleSectionClass}>
        <Link to={postLink.url} className={linkClass}>
          <h3 className={contentTitleClass}>{postLink.name}</h3>
        </Link>
        <span className={dateClass}>{publishDate.toLocaleDateString()}</span>
      </div>
      <p className={paragraphClass}>{description}</p>
      <div className={footerClass}>
        <label className={detailLabelClass}>Reading Time: </label>
        <span>{timeEstimate} Minutes</span>
      </div>
    </div>
  );
};

export const PostCard: React.FC<IPostCardProps> = (props) => (
  <CardLayout
    color={Colors.Third}
    top={<CardTop image={props.postLink.image} link={props.postLink} />}
    content={<PostContent {...props} />}
  />
);
