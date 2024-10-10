"use client"

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategoryList from '@/components/CategoryList';
import { Button } from '@/components/ui/button';

export default function Home() {
  const router = useRouter();

  const handleShopNow = () => {
    router.push('/products');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Interactive E-commerce Store</h1>
        <p className="text-xl mb-6">Discover amazing products with an immersive shopping experience.</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={handleShopNow}
          >
            Shop Now
          </Button>
        </motion.div>
      </motion.section>
      <CategoryList />
      <FeaturedProducts />
    </motion.div>
  );
}