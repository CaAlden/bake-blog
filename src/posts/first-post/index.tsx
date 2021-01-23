import Post from '../../Post';
import connectData from '../../utils/connectData';
import { data } from './data';

const FirstPost = connectData(
  data,
  Post,
);

export default FirstPost;
