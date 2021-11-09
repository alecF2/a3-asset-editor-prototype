import styles from '@styles/view_collection.module.scss'

import { ICollection } from 'interfaces'
import Axios, { AxiosResponse } from 'axios'
import Link from 'next/link'
<<<<<<< HEAD
import { sample, sample2 } from '@components/Samples'

import CollectionsList from '@components/CreatorView/CollectionsView/CollectionsList'
=======

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
>>>>>>> e463013dadf7280b6a2f2218ec0ff4b809c95487

export const getStaticProps = async () => {
  let response: AxiosResponse
  let data: ICollection[]
  try {
    response = await Axios.get("/get_all_collections")
    data = response.data as ICollection[]
  } catch (err) {
    // console.log(err)
<<<<<<< HEAD
    data = [sample, sample2]
=======
    data = [sample]
>>>>>>> e463013dadf7280b6a2f2218ec0ff4b809c95487
  }

  return {
    props: {
      collections: data
    }
  }
}

const CollectionsView = ({ collections }: { collections: ICollection[] }) => {
  return (
<<<<<<< HEAD
    <CollectionsList collections={collections} />
=======
    <ul>
      {collections.map(col => {
        return (
          <Link href={`/creator_view/collections/${col.id}`}>
            <a><li>{col.name}</li></a>
          </Link>
        )
      })}
    </ul>
>>>>>>> e463013dadf7280b6a2f2218ec0ff4b809c95487
  )
}

export default CollectionsView
