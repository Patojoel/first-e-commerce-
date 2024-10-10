"use client"

import Link from 'next/link';
import { ShoppingCart, Search, User } from 'lucide-react';
import { ModeToggle } from './mode-toggle';
import { motion } from 'framer-motion';
import { useCart } from '@/lib/CartContext';
import { Badge } from "@/components/ui/badge"

const Header = () => {
  const { cart } = useCart();

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-background shadow-md sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          E-Shop
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href="/cart" className="flex items-center hover:text-primary transition-colors">
                  <ShoppingCart className="mr-1" size={20} />
                  Cart
                  {cartItemsCount > 0 && (
                    <Badge variant="destructive" className="ml-1">
                      {cartItemsCount}
                    </Badge>
                  )}
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Search className="cursor-pointer" size={20} />
              </motion.div>
            </li>
            <li>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <User className="cursor-pointer" size={20} />
              </motion.div>
            </li>
            <li><ModeToggle /></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;