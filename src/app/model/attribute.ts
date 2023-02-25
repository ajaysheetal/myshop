import { Base } from '../model/base';
export interface Attribute extends Base {
  _id?: string;
  name: string;
  value: string;
  status: number;
  image: string;
}
