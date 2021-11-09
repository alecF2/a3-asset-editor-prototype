import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      {/* <Link href="add_item">Add items</Link>
      <br /> */}
      <Link href="/creator_view">Creator view</Link>
    </div>
  )
}

export default Home
