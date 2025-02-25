import { useState } from 'react';

const useProductFilters = (products: any[]) => {
    const [selectedBrands, setSelectedBrands] = useState<
        { category: string; brands: string[] }[]
    >([]);
    const [selectedSuppliers, setSelectedSuppliers] = useState<string[]>([]);
    const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
    const [keyword, setKeyword] = useState<string>('');

    const handleToggle = (setState: any, value: string, category = '') => {
        if (category.length) {
            setState(
                (prevSelected: { category: string; brands: string[] }[]) => {
                    const categoryEntry = prevSelected.find(
                        (entry) => entry.category === category
                    );

                    if (categoryEntry) {
                        const updatedBrands = categoryEntry.brands.includes(
                            value
                        )
                            ? categoryEntry.brands.filter((b) => b !== value)
                            : [...categoryEntry.brands, value];

                        return updatedBrands.length
                            ? prevSelected.map((entry) =>
                                  entry.category === category
                                      ? { ...entry, brands: updatedBrands }
                                      : entry
                              )
                            : prevSelected.filter(
                                  (entry) => entry.category !== category
                              );
                    } else {
                        return [...prevSelected, { category, brands: [value] }];
                    }
                }
            );
        } else {
            setState((prev: string[]) =>
                prev.includes(value)
                    ? prev.filter((item) => item !== value)
                    : [...prev, value]
            );
        }
    };

    const filteredProducts = products.filter((product) => {
        return (
            (selectedSuppliers.length === 0 ||
                selectedSuppliers.includes(product.brand)) &&
            (selectedBrands.length === 0 ||
                selectedBrands.some(
                    ({ category, brands }) =>
                        product.category === category &&
                        brands.includes(product.brand)
                )) &&
            product.name.toLowerCase().includes(keyword.toLowerCase()) &&
            (selectedKeywords.length === 0 ||
                selectedKeywords.some(
                    (kw) =>
                        product.name.toLowerCase().includes(kw.toLowerCase()) ||
                        product.brand.toLowerCase().includes(kw.toLowerCase())
                ))
        );
    });

    return {
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
    };
};

export default useProductFilters;
