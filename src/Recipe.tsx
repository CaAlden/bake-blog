import { css } from "@emotion/css";
import * as React from "react";
import { PostData, Recipe as RecipeData, Parameter, IRecipeDetail } from "../types";
import { useUnits } from "./context";
import HeroImage from "./layout/HeroImage";
import PageLayout from "./layout/PageLayout";
import Markdown from "./utils/Markdown";
interface IProps<P extends Parameter[]> {
  data: RecipeData<P>;
}

const recipeLayoutClass = css({
  display: 'grid',
  gridTemplateRows: 'minmax(400px, 60vh) 30px',
  gap: '10px',
  gridAutoRows: '1fr',
  flexGrow: 1,
});
const frontMatterClass = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '10px',
  padding: '0 10px',
  color: 'gray',
});

const articleClass = css({
  padding: '0 25%',
  disply: 'flex',
});
export default function Recipe<P extends Parameter[]>({ data }: IProps<P>) {
  const units = useUnits();
  const [param, setParams] = React.useState<P[number]>(data.parameters[0]);
  const selectedRecipe: IRecipeDetail = data.details[param.name];
  return (
    <PageLayout title={data.link.name}>
      <article>
        <HeroImage image={data.link.image} text={data.link.name} />
        <div>
        <section>
          <table>
            <tbody>
              <tr>
                <td>Ingredient</td>
                <td>Amount</td>
              </tr>
              {selectedRecipe.ingredients.map((ingredient) => (
                <tr key={ingredient.name}>
                  <td>{ingredient.name}</td>
                  <td>{ingredient.amount[units]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section>
          <Markdown markdown={selectedRecipe.steps[units]} />
        </section>
        </div>
      </article>
    </PageLayout>
  );
}
