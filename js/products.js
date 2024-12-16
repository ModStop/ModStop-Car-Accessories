const products = [
    {
        id: 1,
        name: 'Racing seats',
        price: 199.99,
        category: 'interior',
        image: 'media\\Seats.jpg',
        description: 'Designed for optimal support and comfort during high-performance driving.'
    },
    {
        id: 2,
        name: 'Performance sway bars',
        price: 5399.99,
        category: 'exterior',
        image: 'media\\Sway bars.JPG',
        description: 'Reduces body roll and improves handling, especially during cornering.'
    },
    {
        id: 3,
        name: 'Performance Fuel Injectors',
        price: 299.99,
        category: 'performance',
        image: 'media\\Fuel-Injectors.jpeg',
        description: 'Delivers precise fuel delivery for optimal engine performance and fuel efficiency.'
    },
    {
        id: 4,
        name: 'High Flow fuel pump',
        price: 269.99,
        category: 'performance',
        image: 'media\\High-Flow-Fuel-Pump.jpg',
        description: 'Supplies adequate fuel flow to support increased engine power and performance.'
    },
    {
        id: 5,
        name: 'Short throw shifter',
        price: 199.99,
        category: 'performance',
        image: 'media\\short-shifter.png',
        description: 'Reduces shift throw for quicker gear changes and improved driving experience.'
    },
    {
        id: 6,
        name: 'Performance clutch',
        price: 199.99,
        category: 'performance',
        image: 'media\\Clutch.jpg',
        description: 'Designed to handle increased torque and horsepower, offering improved durability and responsiveness.'
    },
    {
        id: 8,
        name: 'High flow exhaust manifold',
        price: 259.99,
        category: 'performance',
        image: 'media\\Exhaust-manifold.jpeg',
        description: 'Reduces exhaust backpressure, allowing for increased engine efficiency and power.'
    },
    {
        id: 9,
        name: 'Supercharger',
        price: 1299.99,
        category: 'performance',
        image: 'media\\Supercharger.jpeg',
        description: 'Forced induction systems that increase the amount of air entering the engine, resulting in significant increases in horsepower and torque.'
    },
    {
        id: 10,
        name: 'Performance Suspension',
        price: 599.99,
        category: 'performance',
        image: 'media\\Suspension.jpg',
        description: 'Upgraded shocks, struts, and springs that improve handling, cornering, and overall vehicle control.'
    },
    {
        id: 11,
        name: 'High performance brakes',
        price: 299.99,
        category: 'performance',
        image: 'media\\Brakes.png',
        description: 'Upgraded brake pads, rotors, and calipers that provide improved stopping power and fade resistance.'
    },
    {
        id: 12,
        name: 'Performance chip tuner',
        price: 199.99,
        category: 'performance',
        image: 'media\\ChipTuner.png',
        description: 'A small electronic device that plugs into the car’s computer and re-maps the engine’s computer software to optimize performance. This can increase horsepower, torque, and fuel efficiency.'
    },
    {
        id: 13,
        name: 'Performance exhaust systems',
        price: 169.99,
        category: 'performance',
        image: 'media\\Exhaust.jpg',
        description: 'Replaces the factory exhaust system with a high-flow design that reduces backpressure and improves engine breathing. This can increase horsepower, torque, and improve the sound of the engine.'
    },
    {
        id: 14,
        name: 'Cold air intake',
        price: 159.99,
        category: 'performance',
        image: 'media\\Cold-intake.jpg',
        description: 'Replaces the restrictive factory air intake system with a high-flow design that draws cooler, denser air into the engine. This can increase horsepower and torque.'
    },
    {
        id: 15,
        name: 'Performance Pedals',
        price: 99.99,
        category: 'interior',
        image: 'media\\Pedals.jpeg',
        description: 'Provides improved pedal feel and responsiveness, enhancing driving experience.'
    },
    

];

function getProducts(category = null) {
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