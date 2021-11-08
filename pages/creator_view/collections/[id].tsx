import Axios, { AxiosResponse } from 'axios'
import { ICollection } from 'interfaces'

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

export const getStaticPaths = async () => {
  let response: AxiosResponse
  let data: ICollection[]
  try {
    response = await Axios.get("/get_all_collections")
    data = response.data
  } catch (err) {
    // for testing without backend
    // console.log(err)
    data = [sample]
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
    data = [sample]
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
