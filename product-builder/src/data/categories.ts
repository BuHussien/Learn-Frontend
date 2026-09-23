import type { ICategory } from "../interfaces/ICategory";
import { generateId } from "../Utilities/utils";
export const categories: ICategory[] = [
  {
    id: generateId(),
    logoURL: "https://cdn.simpleicons.org/apple",
    name: "Apple",
  },
  {
    id: generateId(),
    logoURL: "https://cdn.simpleicons.org/samsung",
    name: "Samsung",
  },
  {
    id: generateId(),
    logoURL: "https://cdn.simpleicons.org/hp",
    name: "Hp",
  },
  {
    id: generateId(),
    logoURL: "https://cdn.simpleicons.org/nokia",
    name: "Nokia",
  },
  {
    id: generateId(),
    logoURL: "https://cdn.simpleicons.org/ikea",
    name: "Ikea",
  },
  {
    id: generateId(),
    logoURL: "https://cdn.simpleicons.org/nike",
    name: "Nike",
  },
];
