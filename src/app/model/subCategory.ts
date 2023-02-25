import { Base } from '../model/base';
export interface SubCategory extends Base {
  _id: string;
  categoryId: string;
  title: string;
  description: string;
  status: number;
  image: string;
}
