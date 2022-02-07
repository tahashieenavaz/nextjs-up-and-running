import Head from 'next/head';

function Layout( {children} ) {
    return (
        <>
            <Head>
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
            </Head>

            <main className='bg-gray-200 min-h-screen grid place-content-center px-4 py-10'>
                {children}
            </main>
        </>
    )
}

export default Layout