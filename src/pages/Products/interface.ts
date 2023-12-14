export interface ProductProps {
  id: number;
  name: string;
  description: string;
  avatar: string;
  price: number;
}

export type SelectedFilterProps = 'All' | 'Popular' | 'Drop price';

export interface FilterProps {
  selected: boolean;
}
