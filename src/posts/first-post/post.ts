import { Units } from '../../../types';

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

export default {
  [Units.Metric]: getBlog(Units.Metric),
  [Units.Imperial]: getBlog(Units.Imperial),
}