import { getProducts } from "./server/products";

export default async function Home() {
  const products = await getProducts()
  return (
    <div>
      <h1> Products </h1>
      <pre> {JSON.stringify(products, null, 2)}</pre>


    </div>
  );
}
