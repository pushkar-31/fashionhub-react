import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Home = () => {
  return (
    <>
      <Hero />

      <h2 className="trending-heading">
  Trending Products
</h2>

      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
};

export default Home;