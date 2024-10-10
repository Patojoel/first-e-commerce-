"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Image from 'next/image';
import { useCart } from '@/lib/CartContext';
import { useRef } from 'react';

const products = [
  { id: "1", name: "Elegant Watch", price: 199.99, image: "https://source.unsplash.com/random/400x300?watch", category: "Accessories" },
  { id: "2", name: "Designer Sunglasses", price: 129.99, image: "https://source.unsplash.com/random/400x300?sunglasses", category: "Accessories" },
  { id: "3", name: "Leather Handbag", price: 249.99, image: "https://source.unsplash.com/random/400x300?handbag", category: "Bags" },
  { id: "4", name: "Wireless Earbuds", price: 159.99, image: "https://source.unsplash.com/random/400x300?earbuds", category: "Electronics" },
  { id: "5", name: "Smart Watch", price: 299.99, image: "https://source.unsplash.com/random/400x300?smartwatch", category: "Electronics" },
  { id: "6", name: "Bluetooth Speaker", price: 89.99, image: "https://source.unsplash.com/random/400x300?speaker", category: "Electronics" },
];

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="my-12 relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-8"
      >
        Featured Products
      </motion.h2>
      <div className="relative">
        <Button 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
          onClick={() => scroll('left')}
        >
          &lt;
        </Button>
        <Button 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
          onClick={() => scroll('right')}
        >
          &gt;
        </Button>
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 pb-4 hide-scrollbar"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-none w-64"
              style={{ scrollSnapAlign: 'start' }}
            >
              <Card className="h-full flex flex-col overflow-hidden group">
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-48 w-full mb-4"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </motion.div>
                  <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
                </CardContent>
                <CardFooter>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full"
                  >
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;