"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from '@/lib/CartContext';
import { Trash2 } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Your Cart
      </motion.h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <motion.div
              key={item.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{item.name}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <Card>
              <CardHeader>
                <CardTitle>Cart Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold mb-4">Total: ${total.toFixed(2)}</p>
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={clearCart}
                    className="mr-2"
                  >
                    Clear Cart
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Proceed to Checkout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}