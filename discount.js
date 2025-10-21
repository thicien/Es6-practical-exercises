function applyDiscounts(pricesMap) {
    const discountedMap = new Map();

    for (const [products, price] of pricesMap) {
        const discountedPrice = price - (price * 0.1);
        discountedMap.set(products, discountedPrice);
    }
    return discountedMap;
}
const products = new Map([
    ["Laptop", 1000000],
    ["Smartphone", 500000],
    ["Headset", 50000]
]);

const discountedProducts = applyDiscounts(products);
console.log(discountedProducts);