import Head from 'next/head';
import Rating from '../../components/Rating';

const Product = ( {name, rating,discounted, price, image,description} ) => {
    return (
        <>
            <Head>
                <title>Taha || {name}</title>
            </Head>
            <div className='shadow-2xl rounded-xl bg-white flex flex-col lg:flex-row' style={ {width: 'min(85%, 1200px)', margin: '0 auto'}}>
                <div
                    className="
                        left
                        rounded-tl-xl
                        rounded-tr-xl
                        lg:rounded-tr-none
                        lg:rounded-bl-xl
                        p-10
                        bg-green-300
                        bg-gradient-to-t
                        from-green-500
                        to-green-400
                        flex
                        flex-col
                        justify-between
                        gap-11
                        lg:w-1/3
                    "
                >
                    <div className="logo text-center">
                        <img style={{width: '45px', filter: 'invert(100%)'}} className='mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/840px-Logo_NIKE.svg.png" alt=""/>
                    </div>

                    <div className="image text-center">
                        <img className='shadow-xl mx-auto w-96' src={image} alt=""/>
                    </div>

                    <div className="slider flex gap-2 justify-center">
                        <div className="rounded-full w-3 h-3 bg-black cursor-pointer opacity-50 hover:bg-white hover:opacity-100 transition duration-200"></div>
                        <div className="rounded-full w-3 h-3 bg-black cursor-pointer opacity-50 hover:bg-white hover:opacity-100 transition duration-200"></div>
                        <div className="rounded-full w-3 h-3 bg-black cursor-pointer opacity-50 bg-white opacity-100"></div>
                        <div className="rounded-full w-3 h-3 bg-black cursor-pointer opacity-50 hover:bg-white hover:opacity-100 transition duration-200"></div>
                        <div className="rounded-full w-3 h-3 bg-black cursor-pointer opacity-50 hover:bg-white hover:opacity-100 transition duration-200"></div>
                    </div>
                </div>
                <div className="right p-10 flex flex-col justify-between gap-11">
                    <div className="header flex justify-between">
                        <div className="left flex flex-col gap-3">
                            <div className="titles">
                                <h1 className='text-3xl uppercase font-bold'>
                                    {name}
                                </h1>
                                <h2 className='text-muted uppercase italic text-sm font-bold mt-2'>Mint Green</h2>
                            </div>
                            <div className="prices flex gap-2 text-3xl mt-3">
                                <span className='line-through'>${discounted}</span>
                                <span className='text-red-400'>${price}</span>
                            </div>
                        </div>

                        <Rating percent={rating}></Rating>

                    </div>

                    <div className="meta">
                        <div className='uppercase font-bold text-xl'>Description</div>
                        <p className='text-sm mt-2 text-muted leading-7'>
                            {description}
                        </p>
                    </div>

                    <div className="options flex">
                        <div className="color border-r border-gray-400 flex-1">
                            <div className='uppercase mb-2 font-bold'>color</div>
                            <div className="colors-row flex gap-2 items-center">
                                <div className="w-5 h-5 bg-indigo-500 rounded-full"></div>
                                <div style={ {padding: '.12rem'} } className='border-2 border-green-500 rounded-full'>
                                    <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                                <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                            </div>
                        </div>
                        <div className="size border-r border-gray-400 flex-1 text-center">
                            <div className='uppercase mb-2 font-bold'>size</div>
                            <select name="size" id="" className='p-2 rounded'>
                                <option value="1">41</option>
                                <option value="2">42</option>
                                <option value="3">43</option>
                                <option value="4">44</option>
                                <option value="5">45</option>
                            </select>
                        </div>

                        <div className="size flex-1 text-center">
                            <div className='uppercase mb-2 font-bold'>qty</div>
                            <select name="size" id="" className='p-2 rounded'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>

                    <div className="buttons flex justify-between items-center">
                        <button
                            className='
                                uppercase
                                bg-gradient-to-r
                                from-red-500
                                to-red-600
                                text-white
                                p-3
                                rounded
                                shadow-xl
                            '
                            style={
                                {boxShadow: '0 4px 19px -5px rgb(220, 38, 38)'}
                            }
                        >
                            Add to cart
                        </button>

                        <a href="#" className='opacity-50 hover:opacity-100 transition duration-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps( {query} ) {
    const res = await fetch( `https://fakestoreapi.com/products/${query.id}` )
    const data = await res.json()

    return {
        props: {
            name: data.title,
            rating: (data.rating.rate / 5) * 100,
            price: data.price,
            discounted: (data.price * 1.05).toFixed(2),
            image: data.image,
            description: data.description
        }
    }
}

export default Product