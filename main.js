/**
 * UI Assignment: Food Delivery Web Application
 * Main Application Script (main.js)
 */

/* ==========================================================================
   1. STATIC DATA CONFIGURATION (Restaurants, Menus & Categories)
   ========================================================================== */
const RESTAURANTS_DATA = [
    {
        id: "res-1",
        name: "Pizza Palace",
        rating: 4.8,
        deliveryTime: "20-30 min",
        deliveryMin: 20, // Numerical value used for the sorting algorithm
        category: "Pizza",
        priceIndicator: "$$",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80",
        menu: [
            { id: "m1", name: "Margherita Pizza", price: 12.99, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=300&q=80" },
            { id: "m2", name: "Pepperoni Feast", price: 15.99, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=300&q=80" },
            { id: "m3", name: "Garlic Breadsticks", price: 5.99, image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=300&q=80" }
        ]
    },
    {
        id: "res-2",
        name: "Burger Bonanza",
        rating: 4.5,
        deliveryTime: "15-25 min",
        deliveryMin: 15,
        category: "Burgers",
        priceIndicator: "$",         image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",         menu: [             { id: "m4", name: "Classic Cheeseburger", price: 8.99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80" },             { id: "m5", name: "Double Patty Bacon Burger", price: 11.99, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=300&q=80" },             { id: "m6", name: "Spicy Cajun Fries", price: 3.49, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=300&q=80" }         ]     },     {         id: "res-3",         name: "Sushi Sakura",         rating: 4.9,         deliveryTime: "30-40 min",         deliveryMin: 30,         category: "Sushi",         priceIndicator: "$$$",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=500&q=80",
        menu: [
            { id: "m7", name: "Salmon Sashimi Platters", price: 19.99, image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80" },
            { id: "m8", name: "California Roll (8pcs)", price: