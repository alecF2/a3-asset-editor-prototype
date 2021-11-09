import styles from '@styles/view_collection.module.scss'

import { ICollection } from 'interfaces'
import Axios, { AxiosResponse } from 'axios'
import Link from 'next/link'
import { sample, sample2 } from '@components/Samples'

import CollectionsList from '@components/CreatorView/CollectionsView/CollectionsList'

export const getStaticProps = async () => {
  let response: AxiosResponse
  let data: ICollection[]
  try {
    response = await Axios.get("/get_all_collections")
    data = response.data as ICollection[]
  } catch (err) {
    // console.log(err)
    data = [sample, sample2]
  }

  return {
    props: {
      collections: data
    }
  }
}

const CollectionsView = ({ collections }: { collections: ICollection[] }) => {
  return (
    <CollectionsList collections={collections} />
  )
}

export default CollectionsView
