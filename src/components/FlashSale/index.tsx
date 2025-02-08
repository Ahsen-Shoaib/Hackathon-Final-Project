"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// import Counter from '../Counter';
// import { CarouselImage } from '../Carousel';
import { Product } from '../../../types/product';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { allProducts } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { addToCart } from '@/app/actions/action';
import Swal from 'sweetalert2';


const FlashSale = () => {
    const[product, setProdcut] = useState<Product[]>([])

    useEffect(() => {
        async function fetchproduct(){
            const fetchedProduct : Product[] = await client.fetch(allProducts)
            setProdcut(fetchedProduct)

        }
        fetchproduct()
    },[])

    const handleAddToCart =(e: React.MouseEvent, product:Product)=>{
        e.preventDefault()
        Swal.fire({
            position: "top-right",
            icon: "success",
            title: `${product.productName} added to cart`,
            showConfirmButton: false,
            timer: 1200

            
        })

        addToCart(product);
        // alert("OK")
        // console.log(handleAddToCart)
    }


    return(
        <div className='max-w-6x1 max-auto px-4 py-8'>
            <h1 className='text-2xl font-bold mb-6 text-center'>
                Our Best Products
            </h1>
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
{product.map((product) =>(
    <div
     key={product._id}
    className='border-rounded lg shadow-md p-4 hover:shadow-lg transition duration-200'
    >
        {/* {product.productName} */}

        <Link href={product?.slug?.current ? `/product/${product.slug.current}` : '#'}>
        
        {product.image && (
            <Image
            src={urlFor(product.image).url()}
            alt="image"
            width={200}
            height={200}
            className='w-full h-48 object-cover rounded-md'

            />
        )}
        <h2 className='text lg font font-semibold mt-4'>{product.productName}</h2>
        <p className='text-grey-500 mt-2'>
            {product.price ? `$${product.price}` : 'Price not available'}
        </p>
        <button
            className ="bg-gradient-to-r from to-blue-500 to bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg shodow-md hover:shadow-lg
            hover:scale-110 transition-transform duration-300 esae-in-out"
            onClick = {(e)=>handleAddToCart(e,product)}
            >
              Add to Cart  {/* {product.addToCartButtonText} */}
        </button>
        </Link>
    </div>
))}
</div>


        </div>
    );
};

export default FlashSale;
