const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

// Placeholder data
const products = [
  { id: '1', name: 'Product A', description: 'Description for Product A', price: 10.99, image_url: 'https://via.placeholder.com/150' },
  { id: '2', name: 'Product B', description: 'Description for Product B', price: 20.50, image_url: 'https://via.placeholder.com/150' },
  { id: '3', name: 'Product C', description: 'Description for Product C', price: 5.00, image_url: 'https://via.placeholder.com/150' },
];

const categories = [
  { id: 'cat1', name: 'Electronics' },
  { id: 'cat2', name: 'Books' },
  { id: 'cat3', name: 'Clothing' },
];

router.get('/products', (req, res) => {
  res.json(products);
});

router.get('/categories', (req, res) => {
  res.json(categories);
});

app.use('/.netlify/functions/api', router);

module.exports = app;