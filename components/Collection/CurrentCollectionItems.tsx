import styles from './CurrentCollectionItems.module.scss'

import { Dispatch, SetStateAction, useEffect } from 'react'
import { IVocab } from '../../interfaces'

interface Props {
  setItems: Dispatch<SetStateAction<IVocab[] | undefined>>
  items: IVocab[] | undefined
}

const CurrentCollectionItems = ({ items, setItems }: Props) => {
  const Card = (item: IVocab) => {
    return (
      <article key={item.value}>
        <h3>{item.value}</h3>
        <h3>{item.translation}</h3>
      </article>
    )
  }

  useEffect(() => {
    if (localStorage.getItem("currentCollection") != null)
    setItems(JSON.parse(localStorage.getItem("currentCollection")!))
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
