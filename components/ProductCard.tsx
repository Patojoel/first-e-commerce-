"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Product } from '@/app/products/data'
import { useCart } from '@/lib/CartContext'
import { useToast } from "@/components/ui/use-toast"

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
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
            src={`https://source.unsplash.com/random/400x300?${product.category}`}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </motion.div>
        <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-500">{product.category}</p>
      </CardContent>
      <CardFooter>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full"
        >
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-white"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </motion.div>
      </CardFooter>
    </Card>
  )
}

export default ProductCard