import useProductFilters from '../../hooks/useProductFilters.ts.ts';
import {
  categories,
  keywords,
  products,
  suppliers,
} from '../../constants/constant.ts';
import CategoryFilter from './CategoryFilter.tsx';
import ProductCard from './ProductCard.tsx';
import ProductSidebar from './ProductSidebar.tsx';

const Product = () => {
  const {
    selectedBrands,
    selectedSuppliers,
    selectedKeywords,
    keyword,
    setSelectedBrands,
    setSelectedSuppliers,
    setSelectedKeywords,
    setKeyword,
    handleToggle,
    filteredProducts,
  } = useProductFilters(products);

  return (
    <div className="flex flex-col w-full md:flex-row px-6 overflow-auto">
      <ProductSidebar
        categories={categories}
        suppliers={suppliers}
        keywords={keywords}
        selectedBrands={selectedBrands}
        selectedSuppliers={selectedSuppliers}
        selectedKeywords={selectedKeywords}
        setSelectedBrands={setSelectedBrands}
        setSelectedSuppliers={setSelectedSuppliers}
        setSelectedKeywords={setSelectedKeywords}
        handleToggle={handleToggle}
        keyword={keyword}
        setKeyword={setKeyword}
      />

      <main className="w-full md:w-5/6 p-2">
        <h2 className="text-2xl font-normal mb-2">Products</h2>
        <CategoryFilter />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))
          ) : (
            <p className="text-gray-500">No products found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Product;
