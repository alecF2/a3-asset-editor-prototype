import styles from '@styles/view_collection.module.scss'

import { ICollection } from 'interfaces'
import Axios, { AxiosResponse } from 'axios'
import Link from 'next/link'

const sample: ICollection = {
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
  name: "Spanish collection",
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

export const getStaticProps = async () => {
  let response: AxiosResponse
  let data: ICollection[]
  try {
    response = await Axios.get("/get_all_collections")
    data = response.data as ICollection[]
  } catch (err) {
    // console.log(err)
    data = [sample]
  }

  return {
    props: {
      collections: data
    }
  }
}

const CollectionsView = ({ collections }: { collections: ICollection[] }) => {
  return (
    <ul>
      {collections.map(col => {
        return (
          <Link href={`/creator_view/collections/${col.id}`}>
            <a><li>{col.name}</li></a>
          </Link>
        )
      })}
    </ul>
  )
}

export default CollectionsView
