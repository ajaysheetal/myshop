import { Base } from '../model/base';
export interface Category extends Base {
  _id?: string;
  title: string;
  description: string;
  status: number;
  image: string;
}
