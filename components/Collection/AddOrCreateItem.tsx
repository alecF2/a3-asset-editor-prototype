import styles from './AddOrCreateItem.module.scss'

import Link from 'next/link'

const AddOrCreateItem = () => {
  return (
    <section id={styles.container}>
      {/* not sure if adding existing item functionality is needed */}
      {/* <button>Add an Existing Item</button> */}
      <Link href="/add_item?append=true">
        <button>Create a new Item</button>
      </Link>
    </section>
  )
}

export default AddOrCreateItem
