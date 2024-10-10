export interface Product {
  id: string
  name: string
  price: number
  category: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Elegant Watch",
    price: 199.99,
    category: "Accessories",
  },
  {
    id: "2",
    name: "Designer Sunglasses",
    price: 129.99,
    category: "Accessories",
  },
  {
    id: "3",
    name: "Leather Handbag",
    price: 249.99,
    category: "Bags",
  },
  {
    id: "4",
    name: "Wireless Earbuds",
    price: 159.99,
    category: "Electronics",
  },
  {
    id: "5",
    name: "Smart Fitness Tracker",
    price: 89.99,
    category: "Electronics",
  },
  {
    id: "6",
    name: "Portable Bluetooth Speaker",
    price: 79.99,
    category: "Electronics",
  },
  {
    id: "7",
    name: "Premium Coffee Maker",
    price: 129.99,
    category: "Home Appliances",
  },
  {
    id: "8",
    name: "Stylish Desk Lamp",
    price: 49.99,
    category: "Home Decor",
  },
  {
    id: "9",
    name: "Comfortable Ergonomic Chair",
    price: 199.99,
    category: "Furniture",
  },
  {
    id: "10",
    name: "High-Performance Blender",
    price: 89.99,
    category: "Kitchen Appliances",
  },
  {
    id: "11",
    name: "Durable Hiking Backpack",
    price: 79.99,
    category: "Outdoor Gear",
  },
  {
    id: "12",
    name: "Professional DSLR Camera",
    price: 799.99,
    category: "Electronics",
  }
]