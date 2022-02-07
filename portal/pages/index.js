import Head from 'next/head'

export default function Home() {
  return (
    <div>
        <Head>
            <title>
                Taha Shieenavaz - {Math.random()}
            </title>
        </Head>
        <h1>Hello to our Next App!</h1>
    </div>
  )
}
