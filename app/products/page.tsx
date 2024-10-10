"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { products } from './data'
import ProductCard from '@/components/ProductCard'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useSearchParams } from 'next/navigation'

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 8
  const searchParams = useSearchParams()

  useEffect(() => {
    const category = searchParams.get('category')
    if (category) {
      const filtered = products.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
      )
      setFilteredProducts(filtered)
    } else {
      setFilteredProducts(products)
    }
  }, [searchParams])

  const filterProducts = (term: string) => {
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(term.toLowerCase())
    )
    setFilteredProducts(filtered)
    setCurrentPage(1)
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value
    setSearchTerm(term)
    filterProducts(term)
  }

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="container mx-auto py-10">
      <motion.h1 
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Products
      </motion.h1>
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="max-w-sm mx-auto"
        />
      </div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {currentProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, i) => (
          <Button
            key={i}
            onClick={() => paginate(i + 1)}
            variant={currentPage === i + 1 ? "default" : "outline"}
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </div>
  )
}