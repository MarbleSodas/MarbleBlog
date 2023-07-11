import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Author = ({ author }) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1, transition: { duration: .75}}}
    >
      <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
        <div className="absolute left-5 right-0 -top-14">
          <Image
            unoptimized
            alt={author.name}
            height={100}
            width={100}
            className='align-middle rounded-full'
            src={author.photo.url}
          />
        </div>
        <h3 className='text-white mt-4 mb-4 text-xl font-bold'>{author.name}</h3>
        <p className='text-white text-ls'>{author.bio}</p>
      </div>
    </motion.div>
    
  )
}

export default Author;