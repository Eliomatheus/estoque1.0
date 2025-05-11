import { db } from "../_lib/prisma";

const ProductPage = async () => {
  const products = await db.product.findMany({});
  return (
    <div>
      {products.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  );
};

export default ProductPage;
