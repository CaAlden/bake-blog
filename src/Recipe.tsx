import { css } from "@emotion/css";
import * as React from "react";
import {
  PostData,
  Recipe as RecipeData,
  Parameter,
  IRecipeDetail,
  Ingredient,
} from "../types";
import { Breakpoint, useBreakpoint, useUnits } from "./context";
import HeroImage from "./layout/HeroImage";
import PageLayout from "./layout/PageLayout";
import { RecipeMarkdown as Markdown } from "./utils/Markdown";
import { useQueryContext } from "./context";

const sliderContainerClass = css({
  flexGrow: 1,
  flexDirection: "column",
  display: "flex",
  maxWidth: '500px',
  minWidth: '310px',
});
const optionsClass = css({
  display: "flex",
  justifyContent: "space-between",
  flexGrow: 1,
});
const labelClass = css({
  cursor: "pointer",
});
const sliderClass = css({
  flexGrow: 1,
  margin: "0 15px",
  background: "transparent" /* Otherwise white in Chrome */,
  outline: "none",
});
const ParameterRange: React.FC<{
  parameter: Parameter;
  current: string;
  updateSetting: (setting: string) => void;
}> = ({ parameter, current, updateSetting }) => {
  return parameter.settings.length > 1 ? (
    <div className={sliderContainerClass}>
      <div className={optionsClass}>
        {parameter.settings.map((s) => (
          <span
            className={labelClass}
            onClick={() => updateSetting(s)}
            key={s}
            style={{ fontWeight: s === current ? "bold" : "normal" }}
          >
            {s}
          </span>
        ))}
      </div>
      <input
        className={sliderClass}
        type="range"
        min="0"
        max={parameter.settings.length - 1}
        onChange={(e) => updateSetting(parameter.settings[e.target.value])}
        value={parameter.settings.indexOf(current)}
      />
    </div>
  ) : null;
};

const listClass = css({
  display: "flex",
  flexDirection: "column",
  minWidth: "310px",
  alignItems: 'center',
  padding: "10px",
  background: "#fff",
});
const Parameters: React.FC<{
  parameters: Parameter[];
  settings: string[];
  updateSettings: (settings: string[]) => void;
}> = ({ parameters, settings, updateSettings }) => {
  if (parameters.length < 1) {
    return null;
  }
  return (
    <section className={listClass}>
      <h2>Recipe Preferences</h2>
      {parameters.map((p, i) => (
        <ParameterRange
          parameter={p}
          current={settings[i]}
          updateSetting={(setting) =>
            updateSettings([
              ...settings.slice(0, i),
              setting,
              ...settings.slice(i + 1),
            ])
          }
          key={p.name}
        />
      ))}
    </section>
  );
};

const tableClass = css({
  minWidth: "310px",
  flexGrow: 1,
  borderCollapse: "collapse",
  border: "1px solid black",
  background: "white",
});
const tableHeaderCellClass = css({
  padding: "10px",
  fontWeight: "bold",
  color: "white",
  background: "black",
});
const tableCellClass = css({
  padding: "10px",
  border: "1px solid black",
});
const Ingredients: React.FC<{ ingredients: Ingredient[] }> = ({
  ingredients,
}) => {
  const [units] = useUnits();
  return (
    <table className={tableClass}>
      <tbody>
        <tr>
          <td className={tableHeaderCellClass}>Ingredient</td>
          <td className={tableHeaderCellClass}>Amount</td>
        </tr>
        {ingredients.map((ingredient) => (
          <tr key={`${ingredient.name}-${units}`}>
            <td className={tableCellClass}>{ingredient.name}</td>
            <td className={tableCellClass}>{ingredient.amount[units]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

interface IProps {
  data: RecipeData;
}

const recipeLayoutClass = css({
  display: "grid",
  gap: "10px",
  paddingTop: '20px',
  gridAutoRows: "1fr",
  flexGrow: 1,
});
const recipeMainClass = css({
  position: "relative",
  display: "flex",
  flexWrap: "wrap-reverse",
  flexGrow: 1,
  gap: '15px',
});

const recipeSidebarClass = (breakpoint: Breakpoint) => css({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  justifyContent: breakpoint === Breakpoint.Large ? 'flex-start': 'center',
  flexBasis: "310px",
});
const articleClass = css({
  flexGrow: 3,
  flexBasis: '600px',
  background: '#fff',
  padding: '0.5em 3em',
});

const useSettings = (params: Parameter[]) => {
  const { query, setQuery } = useQueryContext();
  const defaultSettings = params.map(p => {
    const q = query[p.name];
    if (typeof q === 'string' && p.settings.find(s => s === q)) {
      return q;
    } else {
      return p.settings[0];
    }
  });
  const [settings, setSettings] = React.useState<string[]>(defaultSettings);
  const [fullSetting, setFullSetting] = React.useState(defaultSettings.join('-'));
  React.useEffect(() => {
    const updates = query;
    params.forEach((p, i) => {
      if (query[p.name] !== settings[i]) {
        updates[p.name] = settings[i];
      }
    });
    setQuery(updates);
  }, [settings, query, params]);

  return {
    detail: fullSetting,
    settings,
    updateSettings: (newSettings: string[]) => {
      setSettings(newSettings);
      setFullSetting(newSettings.join('-'));
    }
  };
}

export default function Recipe({ data }: IProps) {
  const [units] = useUnits();
  const breakpoint = useBreakpoint();
  const { settings, detail, updateSettings } = useSettings(data.parameters);
  const selectedRecipe: IRecipeDetail = data.details.get(settings.join("-"));
  return (
    <PageLayout
      title={data.link.name}
      hero={<HeroImage image={data.link.image} text={data.link.name} />}
    >
      <article className={recipeLayoutClass}>
        <div className={recipeMainClass}>
          <section className={articleClass}>
            <Markdown markdown={selectedRecipe.steps[units]} />
          </section>
          <div className={recipeSidebarClass(breakpoint)}>
            <Parameters
              parameters={data.parameters}
              settings={settings}
              updateSettings={updateSettings}
            />
            <Ingredients ingredients={selectedRecipe.ingredients} />
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
