// Book Price Analyzer - Practicing JavaScript Basics

/* This program analyzes a book's price 
displays facts using strings, numbers, 
and the Math object */

const book = {
    title: "The Hobbit",
    price: 29.99
};


// Store additional book properties
const pageCount = 310;
const isAffordable = book.price < 30;
const missingPrice = null;


// Calculate Price Facts
const discountPrice = book.price - 5;
const pricePerPage = book.price / pageCount;
const priceMod3 = book.price % 3;


const roundedPricePerPage = Math.round(pricePerPage * 1000) / 1000;


// display book price analysis results
console.log("Book Title: " + book.title.toUpperCase());
console.log("Original Price: $" + book.price);
console.log("Is Affordable? " + isAffordable);
console.log("Discounted Price: $" + discountPrice);
console.log("Price per Page: $" + roundedPricePerPage);

//check for missing date
const noData = undefined;
console.log("Missing Price: " + missingPrice);
console.log("No Data: " + noData);