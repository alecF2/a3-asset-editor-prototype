import { ICollection } from "interfaces"

export const sample: ICollection = {
  author: {
    email: {
      address: "alec@null.net"
    },
    id: "",
    name: "Alec Atienza",
    rank: 0
  },
  description: "a collection of Spanish vocab",
  id: "random",
  lang: 0,
  name: "Spanish collection",
  items: [
    {
      id: "a1",
      lang: "Spanish",
      translation: "cat",
      value: "el gato"
    },
    {
      id: "a2",
      lang: "Spanish",
      translation: "dog",
      value: "el perro"
    }
  ]
}

export const sample2: ICollection = {
  author: {
    email: {
      address: "alec@null.net"
    },
    id: "",
    name: "Alec Atienza",
    rank: 0
  },
  description: "a collection of Spanish vocab",
  id: "random2",
  lang: 0,
  name: "Spanish collection 2",
  items: [
    {
      id: "b1",
      lang: "Spanish",
      translation: "table",
      value: "la mesa"
    },
    {
      id: "b2",
      lang: "Spanish",
      translation: "pencil",
      value: "el lápiz"
    }
  ]
}