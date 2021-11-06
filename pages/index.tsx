import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Link href="add_item">Add items</Link>
      <br />
      <Link href="add_collection">Add collection</Link>
    </div>
  )
}

export default Home
