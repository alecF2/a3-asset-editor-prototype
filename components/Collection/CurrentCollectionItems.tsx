import styles from './CurrentCollectionItems.module.scss'

import { Dispatch, SetStateAction, useEffect } from 'react'
import { IVocab } from '../../interfaces'

interface Props {
  setItems: Dispatch<SetStateAction<IVocab[] | undefined>>
  items: IVocab[] | undefined
}

const CurrentCollectionItems = ({ items, setItems }: Props) => {
  const handleRemove = (id: string) => {
    const newItems = items!.filter(item => item.id !== id)
    setItems(newItems)
  }

  const Card = (item: IVocab) => {
    return (
      <article key={item.value}>
        <h3>{item.value}</h3>
        <h3>{item.translation}</h3>
        <button onClick={() => handleRemove(item.id)}>REMOVE</button>
      </article>
    )
  }

  useEffect(() => {
    if (localStorage.getItem("state") != null) {
      console.log("setting")
      setItems(JSON.parse(localStorage.getItem("state")!).items)
    }
  }, [])

  return (
    <section id={styles.container}>
      <h2>Current Collection Items</h2>
      <div>
        { items ? items.map(Card) : null }
      </div>
    </section>
  )
}

export default CurrentCollectionItems
