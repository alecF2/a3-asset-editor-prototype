import Axios, { AxiosResponse } from 'axios'
import { ICollection } from 'interfaces'
<<<<<<< HEAD
import { sample, sample2 } from '@components/Samples'

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

export const getStaticPaths = async () => {
  let response: AxiosResponse
  let data: ICollection[]
  try {
    response = await Axios.get("/get_all_collections")
    data = response.data
  } catch (err) {
    // for testing without backend
    // console.log(err)
<<<<<<< HEAD
    data = [sample, sample2]
=======
    data = [sample]
>>>>>>> e463013dadf7280b6a2f2218ec0ff4b809c95487
  }

  const paths = data.map(col => {
    return {
      params: {
        id: col.id
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id
  let response: AxiosResponse
  let data: ICollection[]
  try {
    response = await Axios.get(`/get_collection?id=${id}`)
    data = response.data as ICollection[]
  } catch (err) {
    // for testing without backend
    // console.log(err)
<<<<<<< HEAD
    data = [id === "random" ? sample : sample2]
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

const CollectionDetails = ({ collections }: { collections: ICollection[] }) => {
  return (
    <>
      {collections.map(col => {
        return (
          <div>
            <h2>{col.name}</h2>
            {col.items.map(item => {
              return (
                <p>{item.value}</p>
              )
            })}
          </div>
        )
      })}
    </>
  )
}

export default CollectionDetails
