import { FarzaaContext } from '@/context/FarzaaContext';
import { allProductListLife } from '@/data/Data';
import React, { useContext, useState } from 'react';

const categories = [
    { name: null, label: 'All Meals' },
    // { name: 'Plastic Door', label: 'Plastic Door' },
    // { name: 'Wooden Door', label: 'Wooden Door' },
    // { name: 'Double Layer Door', label: 'Double layer Door' },
    // { name: 'Chinese Door', label: 'Chinese Door' },
    // { name: 'Steel Door', label: 'Steel Door' },
    // { name: 'Solid Color Door', label: 'Solid Color Door' },
    // { name: 'Panel Door', label: 'Panel door' },
    // { name: 'Security Door', label: 'Security door' }
];



// export default ProductCategoryList;
const ProductCategoryListLife = () => {
    const { handleCategoryFilter } = useContext(FarzaaContext);
    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (category) => {
        handleCategoryFilter(category);
        setActiveCategory(category);
    };

    return (
        <section className="sidebar-single-area product-categories-area">
            <h3 className="sidebar-single-area__title">Product categories</h3>
            <ul className="product-categories">
                {categories.map(categoryObj => (
                    <li key={categoryObj.name} onClick={() => handleCategoryClick(categoryObj.name)}
                        className={activeCategory === categoryObj.name ? 'active' : ''}>
                        {categoryObj.label} ({categoryObj.name === null ? allProductListLife.length :
                            allProductListLife.filter(product => product.category === categoryObj.name).length})
                        <ul>
                            {allProductListLife.filter(product => product.category === categoryObj.name)
                                .map(product => (
                                    <li key={product.id}>
                                        <a href={product.link}>{product.name}</a>
                                    </li>
                                ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ProductCategoryListLife;
