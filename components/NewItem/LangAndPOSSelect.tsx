import styles from './LangAndPOSSelect.module.scss'

import { Dispatch, SetStateAction, useEffect } from 'react'
import { ELanguage } from 'interfaces/assets'

interface Props {
  setLanguage: Dispatch<SetStateAction<ELanguage>>
}

const LangAndPOSSelect = ({ setLanguage }: Props) => {
  useEffect(() => {
    console.log(typeof ELanguage)
  }, [])
  return (
    <section id={styles.container}>
      {/* <select id="langSelect" className={styles.selection} onChange={(e) => setLanguage(+ELanguage[+e.target.value])} required>
        <option value="">Select a Language</option>
        {Object.values(ELanguage).map(lang => {
          <option value={+lang}>{ELanguage[+lang]}</option>
        })}
      </select>
      <select id="posSelect" className={styles.selection}>
        <option value="">Part of speech</option>
        <option value="noun">Collection 1</option>
        <option value="Collection 2">Collection 2</option>
        <option value="Collection 3">Collection 3</option>
      </select> */}
    </section>
  )
}

export default LangAndPOSSelect
