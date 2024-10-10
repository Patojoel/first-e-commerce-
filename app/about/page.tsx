"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
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
        About Us
      </motion.h1>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Welcome to our interactive e-commerce platform! We are passionate about delivering high-quality products and an exceptional shopping experience to our customers.
            </p>
            <p>
              Founded in 2023, our mission is to revolutionize online shopping by combining cutting-edge technology with personalized service. We strive to offer a wide range of products that cater to diverse needs and preferences.
            </p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We envision a world where online shopping is not just convenient, but also engaging and enjoyable. Our goal is to create a seamless, interactive platform that brings the best of physical retail experiences to the digital realm.
            </p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Our Commitment</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We are committed to:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Providing exceptional customer service</li>
              <li>Offering high-quality, curated products</li>
              <li>Ensuring a secure and user-friendly shopping experience</li>
              <li>Continuously improving our platform based on customer feedback</li>
              <li>Supporting sustainable and ethical business practices</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}