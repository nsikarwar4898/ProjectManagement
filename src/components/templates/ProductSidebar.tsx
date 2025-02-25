import React from 'react';
import CustomButton from '../atoms/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Input from '../atoms/Input/Input';

interface ProductSidebarProps {
    categories: { type: string; brands: { name: string; count: number }[] }[];
    suppliers: string[];
    keywords: string[];
    selectedBrands: { category: string; brands: string[] }[];
    selectedSuppliers: string[];
    selectedKeywords: string[];
    keyword: string;
    setKeyword: (value: string) => void;
    handleToggle: (setState: any, value: string, category?: string) => void;
    setSelectedBrands: React.Dispatch<
        React.SetStateAction<{ category: string; brands: string[] }[]>
    >;
    setSelectedSuppliers: React.Dispatch<React.SetStateAction<string[]>>;
    setSelectedKeywords: React.Dispatch<React.SetStateAction<string[]>>;
}

const ProductSidebar: React.FC<ProductSidebarProps> = ({
    categories,
    suppliers,
    keywords,
    selectedBrands,
    selectedSuppliers,
    selectedKeywords,
    keyword,
    setKeyword,
    handleToggle,
    setSelectedBrands,
    setSelectedSuppliers,
    setSelectedKeywords,
}) => {
    return (
        <aside className="w-full md:w-1/6 p-4 bg-white max-w-max">
            <h2 className="text-xl font-normal mb-6 mt-5">Filters</h2>
            <h2 className="text-xl font-normal">Brands</h2>
            <Input
                placeholder="Search brand"
                width="max-w-max"
                textColor="#575757"
                fontWeight="400"
                value={keyword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setKeyword(e.target.value)
                }
            />

            {categories.map(({ type, brands }) => (
                <div key={type} className="mb-4 pl-2">
                    <h3 className="font-normal text-sm text-[#686767]">
                        {type}
                    </h3>
                    {brands.map(({ name, count }) => (
                        <div key={name} className="flex items-center mb-1">
                            <input
                                type="checkbox"
                                checked={selectedBrands.some(
                                    (entry) =>
                                        entry.category === type &&
                                        entry.brands.includes(name)
                                )}
                                onChange={() =>
                                    handleToggle(setSelectedBrands, name, type)
                                }
                                className="mr-2"
                            />
                            <label className="font-normal text-sm text-[#686767]">
                                {name}
                            </label>
                            <label className="font-normal text-xs bg-[#F2F2F2]  p-1 ml-2 rounded-full">
                                {count}
                            </label>
                        </div>
                    ))}
                </div>
            ))}
            <div className="flex items-center">
                <CustomButton
                    name="Show less"
                    variant="text"
                    styles={{
                        fontWeight: 500,
                        fontSize: '12px',
                        color: '#204C5B',
                        textTransform: 'none',
                    }}
                />
                <FontAwesomeIcon
                    icon={faChevronUp}
                    className="text-[#204C5B]"
                />
            </div>

            <h3 className="font-medium mb-2">Suppliers</h3>
            {suppliers.map((name) => (
                <div key={name} className="flex items-center mb-1">
                    <input
                        type="checkbox"
                        checked={selectedSuppliers.includes(name)}
                        onChange={() =>
                            handleToggle(setSelectedSuppliers, name)
                        }
                        className="mr-2"
                    />
                    <label className="font-normal text-sm text-[#686767]">
                        {name}
                    </label>
                </div>
            ))}
            <div className="flex items-center">
                <CustomButton
                    name="All Suppliers"
                    variant="text"
                    styles={{
                        fontWeight: 500,
                        fontSize: '12px',
                        color: '#204C5B',
                        textTransform: 'none',
                    }}
                />
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-[#204C5B]"
                />
            </div>
            <h3 className="font-medium mb-2">Keywords</h3>
            <div className="flex flex-wrap gap-2">
                {keywords.map((kw) => (
                    <button
                        key={kw}
                        className={`px-3 py-1 rounded-full text-sm ${selectedKeywords.includes(kw) ? 'bg-blue-500 text-white' : 'bg-[#F6F9FA]'}`}
                        onClick={() => handleToggle(setSelectedKeywords, kw)}
                    >
                        {kw}
                    </button>
                ))}
            </div>
        </aside>
    );
};

export default ProductSidebar;
