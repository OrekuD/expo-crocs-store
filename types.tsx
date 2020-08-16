import { ImageRequireSource } from "react-native";

export type RootStackParamList = {
  Home: undefined;
  Product: undefined;
};

export interface Product {
  id: string;
  name: string;
  colors: string[];
  rating: number;
  price: number;
  imageRotation: string;
  images: [{ id: string; image: ImageRequireSource }];
  description: string;
}
