"use client"

import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Watch, Smartphone, Headphones, Camera } from 'lucide-react';
import { useRouter } from 'next/navigation';

const categories = [
  { name: "Watches", icon: Watch, slug: "watches" },
  { name: "Smartphones", icon: Smartphone, slug: "smartphones" },
  { name: "Audio", icon: Headphones, slug: "audio" },
  { name: "Cameras", icon: Camera, slug: "cameras" },
];

const CategoryList = () => {
  const router = useRouter();

  const handleCategoryClick = (slug: string) => {
    router.push(`/products?category=${slug}`);
  };

  return (
    <section className="my-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-8"
      >
        Shop by Category
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => handleCategoryClick(category.slug)}
            className="cursor-pointer"
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <category.icon className="w-12 h-12 mb-4 text-primary" />
                </motion.div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{category.name}</h3>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;