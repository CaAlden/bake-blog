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

const imageClass = css({
  background: "white",
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
const CardTop: React.FC<{ image: Image }> = ({ image }) => {
  return (
    <div className={cardTopContainerClass}>
      <img src={image.small ?? image.base} className={imageClass} />
    </div>
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
  fontSize: "1.1em",
});
const linkClass = css({
  display: "grid",
  gridTemplateRows: "1.5fr 1.5fr 1fr",
  flexGrow: 1,
  gap: "5px",
  color: "inherit",
  textDecoration: "none",
  ":visited": {
    color: "inherit",
  },
  ":hover": {
    cursor: "pointer",
  },
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
    <Link className={linkClass} to={recipeLink.url}>
      <div className={titleSectionClass}>
        <h3 className={contentTitleClass}>{recipeLink.name}</h3>
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
    </Link>
  );
};

export const RecipeCard: React.FC<IRecipeCardProps> = (props) => (
  <CardLayout
    color={Colors.Secondary}
    top={<CardTop image={props.recipeLink.image} />}
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
    <Link className={linkClass} to={postLink.url}>
      <div className={titleSectionClass}>
        <h3 className={contentTitleClass}>{postLink.name}</h3>
        <span className={dateClass}>{publishDate.toLocaleDateString()}</span>
      </div>
      <p className={paragraphClass}>{description}</p>
      <div className={footerClass}>
        <label className={detailLabelClass}>Reading Time: </label>
        <span>{timeEstimate} Minutes</span>
      </div>
    </Link>
  );
};

export const PostCard: React.FC<IPostCardProps> = (props) => (
  <CardLayout
    color={Colors.Third}
    top={<CardTop image={props.postLink.image} />}
    content={<PostContent {...props} />}
  />
);
