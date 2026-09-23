function isValidURL(url: string) {
  var res = url.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
  );
  return res !== null;
}

export const productValidation = (product: {
  productTitle: string;
  productDescription: string;
  imgSource: string;
  cost: string;
}) => {
  const errors = {
    productTitle: "",
    productDescription: "",
    imgSource: "",
    cost: "",
  };
  if (
    !product.productTitle.trim() ||
    product.productTitle.length < 10 ||
    product.productTitle.length > 80
  ) {
    errors.productTitle = "Product Title must be between 10 and 80 character!";
  }
  if (
    !product.productDescription.trim() ||
    product.productDescription.length < 10 ||
    product.productDescription.length > 800
  ) {
    errors.productDescription =
      "Product description must be between 10 and 800 character!";
  }
  if (!isValidURL(product.imgSource.trim())) {
    errors.imgSource = "Not Valid Image URL";
  }
  if (!product.cost.trim() || isNaN(Number(product.cost))) {
    errors.cost = "Not Valid";
  }

  return errors;
};
