import React, { useState } from 'react';
import prod1 from '../assets/images/prod1.png';
import prod2 from '../assets/images/prod2.png';
import prod3 from '../assets/images/prod3.png';
import equi1 from '../assets/images/equi1.png';
import equi2 from '../assets/images/equi2.png';
import equi3 from '../assets/images/equi3.png';
import merch1 from '../assets/images/merch1.png';
import merch2 from '../assets/images/merch2.png';
import merch3 from '../assets/images/merch3.png';
import { Typography, Card } from '@mui/material';

const Shops = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [products] = useState([
        { name: 'Whey protein', image: prod1, price: '₹ 2500' },
        { name: 'Dumbbells', image: equi1, price: '₹ 2500' },
        { name: 'Whey protein', image: prod2, price: '₹ 3500' },
        { name: 'Mass protein', image: prod3, price: '₹ 4500' },
        { name: 'Dumbbells', image: equi1, price: '₹ 2500' },
        { name: 'Mass protein', image: prod3, price: '₹ 4500' },
        { name: 'Dumbbells', image: equi1, price: '₹ 2500' },
        { name: 'Barbells', image: equi2, price: '₹ 2500' },
        { name: 'Weights', image: equi3, price: '₹ 3500' },
        { name: 'Gymshark Tshirt', image: merch1, price: '₹ 499' },
        { name: 'Weights', image: equi3, price: '₹ 3500' },
        { name: 'Gymshark Tshirt', image: merch1, price: '₹ 499' },
        { name: 'Gymshark shirt', image: merch2, price: '₹ 999' },
        { name: 'Golds Gym shirt', image: merch3, price: '₹ 1499' },
        { name: 'Weights', image: equi3, price: '₹ 3500' },
        { name: 'Gymshark Tshirt', image: merch1, price: '₹ 499' },
        { name: 'Gymshark shirt', image: merch2, price: '₹ 999' },
        { name: 'Golds Gym shirt', image: merch3, price: '₹ 1499' },
    ]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="shops-container">
            <h3 className="main-heading">Shop & Merchandise</h3>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
            />
            <div className="grid-container">
                {filteredProducts.map((product, index) => (
                    <Card key={index} className="card">
                        <img src={product.image} alt={product.name} />
                        <div className="card-content">
                            <Typography variant="h6">{product.name}</Typography>
                            <Typography variant="body1">{product.price}</Typography>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Shops;
