import type { IProduct } from "../interfaces/IProduct";
import { generateId } from "../Utilities/utils";

export const products: IProduct[] = [
  {
    id: generateId(),
    imgSource:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600",
    productTitle: "iPhone 13",
    productDescription:
      "The iPhone 13 features a powerful processor and an advanced dual-camera system.",
    cost: "$799.99",
    category: {
      logoUrl: "https://cdn.simpleicons.org/apple",
      name: "Apple",
    },
    colors: ["red", "blue", "silver", "darkblue", "darkred"],
  },
  {
    id: generateId(),
    imgSource:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",
    productTitle: "MacBook Pro",
    productDescription:
      "The MacBook Pro delivers powerful performance with a high-quality display.",
    cost: "$1749.99",
    category: {
      logoUrl: "https://cdn.simpleicons.org/apple",
      name: "Apple",
    },
    colors: ["gray", "silver", "black"],
  },
  {
    id: generateId(),
    imgSource:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600",
    productTitle: "Samsung Galaxy S22",
    productDescription:
      "A powerful smartphone with an impressive display and advanced camera system.",
    cost: "$849.99",
    category: {
      logoUrl: "https://cdn.simpleicons.org/samsung",
      name: "Samsung",
    },
    colors: ["black", "silver", "green"],
  },
  {
    id: generateId(),
    imgSource:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
    productTitle: "HP Pavilion 15",
    productDescription:
      "A versatile laptop suitable for everyday work, study, and entertainment.",
    cost: "$699.99",
    category: {
      logoUrl: "https://cdn.simpleicons.org/hp",
      name: "Hp",
    },
    colors: ["silver", "black", "blue"],
  },
  {
    id: generateId(),
    imgSource:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600",
    productTitle: "Luxury Watch",
    productDescription:
      "A premium watch with a classic design and high-quality construction.",
    cost: "$1399.99",
    category: {
      logoUrl: "https://cdn.simpleicons.org/nokia",
      name: "Nokia",
    },
    colors: ["gold", "silver", "black"],
  },
  {
    id: generateId(),
    imgSource:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600",
    productTitle: "Wireless Headphones",
    productDescription:
      "High-end wireless headphones with immersive sound and noise cancellation.",
    cost: "$249.99",
    category: {
      logoUrl: "https://cdn.simpleicons.org/nokia",
      name: "Nokia",
    },
    colors: ["black", "brown", "red"],
  },
  {
    id: generateId(),
    imgSource:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
    productTitle: "Black Sunglasses",
    productDescription:
      "Stylish sunglasses designed for everyday use and outdoor activities.",
    cost: "$49.99",
    category: {
      logoUrl: "https://cdn.simpleicons.org/ikea",
      name: "Ikea",
    },
    colors: ["black", "brown", "gray"],
  },
  {
    id: generateId(),
    imgSource:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600",
    productTitle: "Nike Sneakers",
    productDescription:
      "Classic sneakers featuring a stylish design and comfortable fit.",
    cost: "$149.99",
    category: {
      logoUrl: "https://cdn.simpleicons.org/nike",
      name: "Nike",
    },
    colors: ["black", "yellow", "red"],
  },
  {
    id: generateId(),
    imgSource:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
    productTitle: "Modern Bed",
    productDescription:
      "A premium modern bed designed with comfort and elegant style in mind. Featuring a sleek, contemporary design, high-quality materials, and a comfortable structure, it brings a refined and relaxing atmosphere to any bedroom. Its timeless appearance blends effortlessly with a variety of interior styles, making it the perfect choice for those who value both comfort and sophistication.",
    cost: "$1899.99",
    category: {
      logoUrl: "https://cdn.simpleicons.org/ikea",
      name: "Apple",
    },
    colors: ["black", "gray", "brown"],
  },
];
