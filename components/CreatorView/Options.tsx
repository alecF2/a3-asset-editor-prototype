import styles from './Options.module.scss'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Axios, { AxiosResponse } from 'axios'
import { ICollection, IVocab } from 'interfaces'

const Options = () => {
  const [collections, setCollections] = useState<ICollection[]>([])

  useEffect(() => {
    async function getCollections() {
      let response: AxiosResponse
      let data: ICollection[]
      try {
        response = await Axios.get("/get_all_collections")
        data = JSON.parse(response.data)
      } catch (err) {
        console.log(err)
        const sample = {
          author: {
            email: {
              address: "alec@null.net"
            },
            id: "",
            name: "Alec Atienza",
            rank: 0
          },
          description: "a collection Spanish vocab",
          id: "random",
          lang: 0,
          name: "Spanish",
          items: [
            {
              id: "",
              lang: "Spanish",
              translation: "cat",
              value: "el gato"
            },
            {
              id: "",
              lang: "Spanish",
              translation: "dog",
              value: "el perro"
            }
          ]
        }
        data = [sample]
      }
      setCollections(data)
    }

    getCollections()
  }, [])

  return (
    <div id={styles.container}>
      <div className={styles.box}>
        <h2>Your Items</h2>
      </div>
      <div className={styles.box}>
        <h2>Your Collections</h2>
        <Link href="/creator_view/collections">
          <a><button>Collections View</button></a>
        </Link>
        {/* {collections.map(col => {
          return (
            <Link href={`/creator_view/view_collection?id=${col.id}`}>
              <a><button key={col.id}>{col.name}</button></a>
            </Link>
          )
        })} */}
      </div>
      <div className={styles.box}>
        <h2>Content Creation</h2>
        <div>
          <Link href="/add_collection">
            <a><button>New Collection</button></a>
          </Link>
          <Link href="/add_item">
            <a><button>New Item</button></a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Options
