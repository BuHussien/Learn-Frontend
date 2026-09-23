// App.tsx
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import type { IProduct } from "./interfaces/IProduct";
import Footer from "./components/Footer";
import { generateId } from "./Utilities/utils";
import Hero from "./components/Hero";
import Modal from "./components/ui/Modal";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import Button from "./components/ui/Button";
import { products as productData } from "./data/products";
import type { IFormInput } from "./interfaces/IFormInputs";
import { formInputList } from "./data/formInputList";
import Input from "./components/ui/Input";
import { productValidation } from "./Validation/ProductValidation";
import ErrorMessage from "./components/ui/ErrorMessage";
import Banner from "./components/ui/Banner";
import { colors } from "./data/colors";
import CircleColor from "./components/ui/CircleColor";
import { Select } from "./components/ui/Select";
import { categories } from "./data/categories";

function App() {
  const formInputs: IFormInput[] = formInputList;

  const EmptyProduct: IProduct = {
    productTitle: "",
    productDescription: "",
    imgSource: "",
    cost: "",
    category: {
      name: "",
      logoUrl: "",
    },
    colors: [],
  };

  // --- States ---
  const [products, setProducts] = useState<IProduct[]>(productData);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [errors, setErrors] = useState({
    productTitle: "",
    productDescription: "",
    imgSource: "",
    cost: "",
  });
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [formProduct, setFormProduct] = useState<IProduct>(EmptyProduct);
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [productToEdit, setproductToEdit] = useState<IProduct>(EmptyProduct);

  // --- Modal Functions ---
  const closeModal = () => setIsOpen(false);
  const openModal = () => {
    setFormProduct(EmptyProduct);
    setTempColors([]);
    setSelectedCategory(categories[0]);
    setIsOpen(true);
  };

  const closeEditModal = () => setIsEditOpen(false);
  const openEditModal = () => setIsEditOpen(true);

  useEffect(() => {
    if (isEditOpen) {
      setTempColors(productToEdit.colors);
      const matchedCategory = categories.find(
        (c) => c.name === productToEdit.category.name,
      );
      setSelectedCategory(matchedCategory ?? categories[0]);
    }
  }, [isEditOpen]);

  // --- Handlers ---
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormProduct((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setproductToEdit((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // --- Add Product ---
  const addProduct = () => {
    const newProduct: IProduct = {
      ...formProduct,
      id: generateId(),
      colors: tempColors,
      category: {
        name: selectedCategory.name,
        logoUrl: selectedCategory.logoURL,
      },
    };

    setProducts((prev) => [newProduct, ...prev]);
    setFormProduct(EmptyProduct);
    setTempColors([]);
    setErrors({
      productTitle: "",
      productDescription: "",
      imgSource: "",
      cost: "",
    });
    closeModal();
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const validationErrors = productValidation({
      productTitle: formProduct.productTitle,
      productDescription: formProduct.productDescription,
      imgSource: formProduct.imgSource,
      cost: formProduct.cost,
    });

    setErrors(validationErrors);
    const hasError = Object.values(validationErrors).some((val) => val !== "");

    if (!hasError) {
      addProduct();
    }
  };

  // --- Edit Product ---
  const updateProduct = () => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === productToEdit.id
          ? {
              ...productToEdit,
              colors: tempColors,
              category: {
                name: selectedCategory.name,
                logoUrl: selectedCategory.logoURL,
              },
            }
          : item,
      ),
    );

    setproductToEdit(EmptyProduct);
    setTempColors([]);
    setErrors({
      productTitle: "",
      productDescription: "",
      imgSource: "",
      cost: "",
    });
    closeEditModal();
  };

  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const validationErrors = productValidation({
      productTitle: productToEdit.productTitle,
      productDescription: productToEdit.productDescription,
      imgSource: productToEdit.imgSource,
      cost: productToEdit.cost,
    });

    setErrors(validationErrors);
    const hasError = Object.values(validationErrors).some((val) => val !== "");

    if (!hasError) {
      updateProduct();
    }
  };

  
  const renderProductColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColors((prev) => [...prev, color]);
      }}
    />
  ));

  return (
    <main>
      <Navbar />
      <Hero />
      <div className="flex justify-between mx-30 my-10">
        <div className="inline-block text-2xl flex-3 font-bold uppercase tracking-[0.25em] text-gray-800 transition-colors duration-300 hover:text-black">
          UPDATE PRODUCTS.
        </div>
        <Button
          className="bg-indigo-500 hover:bg-indigo-600 flex-1"
          width="w-full"
          onClick={openModal}
        >
          Add New
        </Button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-2 lg:gap-6 lg:p-6 mx-5 my-3 lg:mx-16 lg:my-3 bg-gray-50 rounded-2xl shadow-sm">
        {products.map((product) => (
          <ProductCard
            key={product.id || product.productTitle}
            product={product}
            setproductToEdit={setproductToEdit}
            openEditModal={openEditModal}
          />
        ))}
      </div>

      {/* --- Add Modal --- */}
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add New Product">
        <form onSubmit={submitHandler} className="space-y-4">
          {formInputs.map((input) => (
            <div key={input.id} className="flex flex-col space-y-1">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor={input.id}
              >
                {input.label}
              </label>
              <Input
                ID={input.id}
                name={input.name}
                value={String(formProduct[input.name as keyof IProduct] ?? "")}
                onChange={onChangeHandler}
              />
              <ErrorMessage
                message={errors[input.name as keyof typeof errors] ?? ""}
              />
            </div>
          ))}

          <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />

          <div className="flex gap-2">{renderProductColors}</div>

          <div className="flex flex-wrap gap-2 w-full">
            {tempColors.map((c) => (
              <span
                key={c}
                className="flex border-yellow-900 rounded-2xl p-1.5 text-sm hover:cursor-pointer"
                style={{ backgroundColor: c }}
                onClick={() =>
                  setTempColors((prev) => prev.filter((item) => item !== c))
                }
              >
                {c}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </Button>
            <Button
              type="button"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
              onClick={closeModal}
            >
              Close
            </Button>
          </div>
        </form>
      </Modal>

      {/* --- Edit Modal --- */}
      <Modal
        isOpen={isEditOpen}
        closeModal={closeEditModal}
        title="Edit Product"
      >
        <form onSubmit={submitEditHandler} className="space-y-4">
          {formInputs.map((input) => (
            <div key={input.id} className="flex flex-col space-y-1">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor={input.id}
              >
                {input.label}
              </label>
              <Input
                ID={input.id}
                name={input.name}
                value={String(
                  productToEdit[input.name as keyof IProduct] ?? "",
                )}
                onChange={onChangeEditHandler}
              />
              <ErrorMessage
                message={errors[input.name as keyof typeof errors] ?? ""}
              />
            </div>
          ))}

          <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />

          <div className="flex gap-2">{renderProductColors}</div>

          <div className="flex flex-wrap gap-2 w-full">
            {tempColors.map((c) => (
              <span
                key={c}
                className="flex border-yellow-900 rounded-2xl p-1.5 text-sm hover:cursor-pointer"
                style={{ backgroundColor: c }}
                onClick={() =>
                  setTempColors((prev) => prev.filter((item) => item !== c))
                }
              >
                {c}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg"
            >
              Save Changes
            </Button>
            <Button
              type="button"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
              onClick={closeEditModal}
            >
              Close
            </Button>
          </div>
        </form>
      </Modal>

      {/* Banners */}
      <div className="flex flex-col gap-5 p-5 md:flex-row">
        <div className="flex-1">
          <Banner bannerURL="/banner.jpg" />
        </div>
        <div className="flex-1">
          <Banner bannerURL="/banner2.jpg" />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;