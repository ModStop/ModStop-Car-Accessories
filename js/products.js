const products = [
    {
        id: 1,
        name: 'LED Interior Lighting Kit',
        price: 49.99,
        category: 'interior',
        image: 'https://via.placeholder.com/300x200',
        description: 'Complete LED interior lighting kit with multiple color options.'
    },
    {
        id: 2,
        name: 'Carbon Fiber Hood',
        price: 599.99,
        category: 'exterior',
        image: 'https://via.placeholder.com/300x200',
        description: 'Lightweight carbon fiber hood for improved aesthetics and performance.'
    },
    {
        id: 3,
        name: 'Performance Air Intake',
        price: 299.99,
        category: 'performance',
        image: 'https://via.placeholder.com/300x200',
        description: 'High-flow air intake system for increased horsepower.'
    }
];

function getProdcuts(category = null) {
    if(category) {
        return products.filter(product => product.category === category);
    }
    return products;
}

function getProduct(id) {
    return products.find(product => product.id === parseInt(id));
}

function formatPrice(price) {
    return `RM ${price.toFixed(2)}`;
}