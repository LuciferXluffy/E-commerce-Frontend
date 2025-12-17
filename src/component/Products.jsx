import { useParams } from "react-router-dom";
import { getProducts } from "../api/product-api";
import useFetch from "../hooks/useFetch";
import Card from "./Card";

const Products = () => {
  const { brand } = useParams(); // <-- comes from /b/:brand
  const { data: products, loading, error } = useFetch(getProducts, []);

  // getProducts().then(data => console.log(data))
  // .then(data => data.text)
  // .then(data => console.log(data))
  // )

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredProducts = products?.filter(
    (p) => p.brand.toLowerCase() == brand
  );

  return (
    <>
      <div className="w-full overflow-hidden">
        <img
          src={"/product.png"}
          alt="Dropping Soon Shoes"
          className="
          w-full
          sm:h-[378.91px]
          md:h-[px]
          lg:h-[385px]
        "
        />
      </div>
      <div className="p-10">
        <h1 className="text-2xl p-5 text-gray-700">
        {brand.toUpperCase()}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              price={product.price}
              imgUrl={"http://localhost:8081" + product.frontImg}
              brands={product.brand}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
