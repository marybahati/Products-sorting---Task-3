// Time complexity of O(n log n) and space complexity of O(n)

let sortProducts = (sortingOrder, products) => {
 return products.sort((a,b) => {
   if(sortingOrder === 'ASC') return a.price - b.price;  // sort in ascending order
   else return b.price - a.price;   // sort in descending order
    })
}

let products = [
  {
    name: 'Kiondoo',
    price: 13.20,
  },
  {
    name: 'Kiondoo',
    price: 44.22,
  },
  {
    name: 'Kiondoo',
    price: 74.90,
  },
  {
    name: 'Kiondoo',
    price: 32.55,
  },
  {
    name: 'Kiondoo',
    price: 50.00,
  },
]
console.log(sortProducts('DESC', products))

//Note ASC represents ascending and DESC represents descending
