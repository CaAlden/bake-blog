import Post from '../../Post';
import connectData from '../../utils/connectData';
import { data } from './data';

const PieCrustPost = connectData(
  data,
  Post,
);

export default PieCrustPost;
