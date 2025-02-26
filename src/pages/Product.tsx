import Input from '../components/atoms/Input/Input';
import Navbar from '../components/templates/Navbar';
import Product from '../components/templates/Product';

import Breadcrumb from '../components/templates/Breadcrumb';
const Products = () => {
  return (
    <div className="h-screen flex flex-col items-center overflow-hidden">
      <Navbar />
      <div className="w-full flex justify-center">
        <Input placeholder="Search for..." />
      </div>
      <div className="w-full">
        <div className="max-w-7xl mx-10">
          <Breadcrumb title="Products" />
          <h1 className="text-xl font-normal mt-8">Curated Collections</h1>
        </div>
      </div>
      <Product />
    </div>
  );
};

export default Products;
