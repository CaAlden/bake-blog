import { Units, PostData, Recipe, Difficulty, Image, SocialSites } from "../../../types";
import HeroLarge from "../../../assets/img/placeholder_large.webp";
import HeroMedium from "../../../assets/img/placeholder_medium.webp";
import HeroSmall from "../../../assets/img/placeholder_small.webp";
import { CampbellAuthor } from '../../../assets/authors';
import { getAllPurposeFlour, getButter, getEggs, getEggWhite, getSugar, getYolk } from "../../utils/ingredients";

const heroImage: Image = {
  large: HeroLarge,
  medium: HeroMedium,
  small: HeroSmall,
};
const getBlog = (unit: Units): string => `
# Erat Atlas est

## Corpore ambas facerem revocantis mugitibus fortis de

Lorem markdownum, sternere! Luctusque fidem nullumque, pulsa nec inde **manebit
fera**, quinquennia. Semele quae palmas dixit.

1. Generi et dives iugalibus
2. Sanguine secundum pollice concresse quod offensane non
3. Dedi nulla locum

## Quae stare quinque rectorque guttura amnem non

Caede relictum: etiamnunc admotis exaudire motuque
[rector](http://faciles.net/a-trunco), exstant ore aestu stipulis malum. Arma
facientibus aevo postquam annis circumdare lumina meruit. Coniunx operis
quaerenti anguis mihi tendit factis pericla delusum regia. *Temptare opposui*;
ego enim, [in est](http://colorem.net/eburno-bracchia.html) premit me! Nosterque
durus.

## Se aure Lapitharum arces locum passim ferro

Absumitur delicuit non rarior solent, in capit pennarum altera ponit famem
vincitur ut ignes licet semine. Nocte inde considerat funduntque aestus, non
datos tulisti, ultro totaque violata. Tactis quibus, hunc aurea labori, amores
prospicit credo tutum, mater. Iusto curis Ladonis foret fluvios officium flores;
munere, perfudit, est **iam**: pudibundaque comas. Dum saxea, [da
est](http://perstashoc.io/totnomenque.php) struxisse dextera Phinea donis,
verticibus Iunonis femina, sui nec tenet.

## Tosta illi sorores avidi

Manus temporis vertice tantaeque suis alimenta in viasque silvae cura. Adiacet
litore, at recessu vultumque casu caper inmenso signo deos nollem? Circum acui,
[est](http://deposcuntrepetisse.org/aurea-acuto) vale Euboico. Virent currus
monte; telis fuit insania nos clamant Persea.

1. Non una depositura recens gente
2. Moriens petunt tulerunt
3. Consistere inmensos ignis
4. Olentes quantumque modo tinguebat
5. Poteram pete illa ut excipiunt
6. Deceant felicia vulnere clamat spectabilis numen mihi

Culpa in amatis manu! *Hersilien cani inque*! Illo et eadem iube *uti cura* sunt
eripite **rata** populus, *reminiscitur* facit intendens et. Doctior fieretque
tamen. Nulloque inventa nato?
`;

const sugarCookie: Recipe = {
  link: {
    name: "Sugar Cookies",
    url: "/recipes/sugar-cookies",
    image: heroImage,
  },
  difficulty: Difficulty.Easy,
  parameters: [],
  description:
    "Pick your favorite sugar cookie for any occassion using our customizable recipe!",
  details: new Map([
    [
      "",
      {
        steps: {
          [Units.Imperial]: "Do it",
          [Units.Metric]: "Just do it",
        },
        ingredients: [
          {
            name: "Eggs",
            amount: {
              [Units.Metric]: "1",
              [Units.Imperial]: "1",
            },
          },
        ],
      },
    ],
  ]),
};

const getCrispySteps = (units: Units) => `
## Steps
**Preparation**: It is important for the butter to be kept at room tempurature (${units === Units.Imperial ? '75°F' : '25°C'})
so that the blending process is easier.

1. Preheat the **oven** to **${units === Units.Imperial ? '375°F' : '190°C'}**
2. Mix together the butter and sugar in a medium sized mixing bowl until the the mixture is smooth.
3. Add the Egg to the mixture and stir well to fully incorperate.
4. In a separate bowl, mix together the dry ingredients briefly.
5. Slowly mix in the dry ingredients with the wet until a dough forms. There should be no remaining flour.
6. Encorperate the Chocolate chips and walnuts.
7. Place golf ball sized dough spheres on a parchment paper lined cooking tray and bake in the oven for 10-12 minutes.
8. Remove from the oven and place on a wire rack to cool for 5-10 minutes.

Cookies should be eaten quickly but will keep for up to 10 days.
`;

const chocolateChip: Recipe = {
  link: {
    name: "Chocolate Chip Cookies",
    url: "/recipes/chocolate-chip-cookies",
    image: heroImage,
  },
  parameters: [{
    name: 'Texture',
    settings: ['Chewy', 'Balanced', 'Crispy'],
  }],
  difficulty: Difficulty.Easy,
  description:
    "Learn how to make chocolate chip cookies to your preference by experimenting with different ratios of yolks to egg whites!",
  details: new Map([
    [
      "Chewy",
      {
        steps: {
          [Units.Imperial]: "Do it: Chocolate",
          [Units.Metric]: "Just do it: Chocolate",
        },
        ingredients: [
          getButter(120),
          getSugar(100),
          getYolk(1),
          getAllPurposeFlour(200),
        ],
      },
    ],
    [
      "Balanced",
      {
        steps: {
          [Units.Imperial]: "Do it: Chocolate",
          [Units.Metric]: "Just do it: Chocolate",
        },
        ingredients: [
          getButter(120),
          getSugar(100),
          getYolk(1),
          getEggWhite(0.5),
          getAllPurposeFlour(200),
        ],
      },
    ],
    [
      "Crispy",
      {
        steps: {
          [Units.Imperial]: getCrispySteps(Units.Imperial),
          [Units.Metric]: getCrispySteps(Units.Metric),
        },
        ingredients: [
          getButter(120),
          getSugar(100),
          getEggs(1),
          getAllPurposeFlour(200),
        ],
      },
    ],
  ]),
};
export const data: PostData = {
  title: "First Post",
  author: CampbellAuthor,
  description: "First post test description",
  articleLink: {
    url: "/posts/first-post",
    name: "First Post",
    image: heroImage,
  },
  publishDate: new Date("2021-01-23T15:04:34.281Z"),
  timeEstimate: 30,
  blog: {
    [Units.Metric]: getBlog(Units.Metric),
    [Units.Imperial]: getBlog(Units.Imperial),
  },
  recipes: new Map([
    ["sugar-cookies", sugarCookie],
    ["chocolate-chip-cookies", chocolateChip],
  ]),
};
