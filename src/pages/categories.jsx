import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const searchMatch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="categories-page">
      <h1>Shop By Category</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="category-buttons">
        <button onClick={() => setSelectedCategory("All")}>
          All
        </button>

        <button onClick={() => setSelectedCategory("Men")}>
          Men
        </button>

        <button onClick={() => setSelectedCategory("Women")}>
          Women
        </button>

        <button onClick={() => setSelectedCategory("Footwear")}>
          Footwear
        </button>

        <button onClick={() => setSelectedCategory("Accessories")}>
          Accessories
        </button>
      </div>

      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <h2>No Products Found</h2>
        )}
      </div>
    </div>
  );
};

export default Categories;