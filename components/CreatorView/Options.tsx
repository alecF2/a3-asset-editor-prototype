import styles from './Options.module.scss'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { ICollection } from 'interfaces'

const Options = () => {
  const [collections, setCollections] = useState<ICollection[]>([])

  useEffect(() => {
    async function getCollections() {
      const response = await Axios.get("/get_all_collections")
      const data = JSON.parse(response.data)
      setCollections(data)
    }

    // getCollections()
  }, [])

  return (
    <div id={styles.container}>
      <div className={styles.box}>
        <h2>Your Items</h2>
      </div>
      <div className={styles.box}>
        <h2>Your Collections</h2>
        {collections.map(col => {
          return <button>{col.name}</button>
        })}
        <button>Spanish</button>
      </div>
      <div className={styles.box}>
        <h2>Content Creation</h2>
        <div>
          <Link href="add_collection">
            <button>New Collection</button>
          </Link>
          <Link href="add_item">
            <button>New Item</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Options
