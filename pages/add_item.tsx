import LanguageSelect from "../components/CreateItems/Column1/LanguageSelect"
import CardsSection from "../components/CreateItems/Column1/CardsSection"
import WordInput from "../components/CreateItems/Column2/WordInput"
import SoundFileUpload from "../components/CreateItems/Column2/SoundFileUpload"
import Notes from "../components/CreateItems/Column2/Notes"
import Example from "../components/CreateItems/Column3/Example"
import ImageSection from "../components/CreateItems/Column3/ImageSection"
import ImageUploadAndInfo from "../components/CreateItems/Column3/ImageUploadAndInfo"

import styles from 'styles/add_item.module.scss'

import { FormEvent, useState, useEffect } from "react"
import { useRouter } from 'next/router'
import axios from 'axios'

import { ELanguage } from "../interfaces"
import { IVocab } from "../interfaces"

const add_item = () => {
  const router = useRouter()
  const [language, setLanguage] = useState("")
  const [word, setWord] = useState("")
  const [translation, setTranslation] = useState("")
  const [example, setExample] = useState("")
  const [imageDesc, setImageDesc] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [pronunciation, setPronunciation] = useState<File | null>(null)
  let vocabWord: IVocab;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    //  FROM A1
    // const form = new FormData()
    // form.append("language", language)
    // form.append("word", word)
    // form.append("translation", translation)
    // form.append("example", example)
    // form.append("imageDesc", imageDesc)
    // form.append("image", image as Blob)
    // form.append("pronunciation", pronunciation as Blob)

    // const response = await axios.post("http://localhost:4000/add_item", form)
    // console.log(response.data)

    // check for query param, this means that we came from the add collections
    // page and we want to add to the current collection instead of just
    // creating a new vocab word
    if (router.query.append === "true") {
      // add data
      const newItem: IVocab = {
        lang: language,
        translation: translation,
        value: word,
        id: "" // assigned on server
      }

      // get cached data if any
      const data = localStorage.getItem("state") ? JSON.parse(localStorage.getItem("state")!) : {}
      console.log(data)

      if (data.items) {
        data.items.push(newItem)
      } else {
        data.items = [newItem]
      }

      // update cached data with newly added vocab
      localStorage.setItem("state", JSON.stringify(data))

      // go back to add collection page
      router.push("/add_collection")
    }

    // console.log("submitted")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div id={styles.container}>
          <div id={styles.column1}>
            <LanguageSelect setLanguage={setLanguage} />
            <CardsSection />
          </div>
          <div id={styles.column2}>
            <WordInput setWord={setWord} setTranslation={setTranslation} />
            <SoundFileUpload setPronunciation={setPronunciation} />
            <Notes />
          </div>
          <div id={styles.column3}>
            <Example setExample={setExample} />
            <ImageSection />
            <ImageUploadAndInfo setImage={setImage} setImageDesc={setImageDesc} />
          </div>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default add_item
