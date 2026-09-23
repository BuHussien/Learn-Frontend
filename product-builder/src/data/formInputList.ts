import type { IFormInput } from "../interfaces/IFormInputs";

export const formInputList: IFormInput[] = [
  {
    id: "title",
    name: "productTitle",
    label: "Product Title",
    type: "text"
  },
  {
    id: "description",
    name: "productDescription",
    label: "Product description",
    type: "text"
  },
  {
    id: "imgURL",
    name: "imgSource",
    label: "image Source",
    type: "text",
  },
  {
    id: "cost",
    name: "cost",
    label: "Product cost",
    type: "text"
  }
];
