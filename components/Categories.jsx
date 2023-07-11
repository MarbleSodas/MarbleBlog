import { useEffect, useState } from "react";
import React from 'react';
import Link from 'next/link';
import { getCategories } from "../services";
import { motion } from 'framer-motion';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);
  

  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1, transition: { duration: .75}}}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
          Categories
        </h3>
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className="cursor-pointer block pb-3 mb-3">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </motion.div>
    
  )
}

export default Categories