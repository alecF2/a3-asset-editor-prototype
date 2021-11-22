import React from 'react'
import LangAndPOSSelect from './LangAndPOSSelect'

import { useState } from 'react'
import { EPartOfSpeech } from 'interfaces'

const FullGrid = () => {
  const [language, setLanguage] = useState<EPartOfSpeech>(0)

  return (
    <LangAndPOSSelect setLanguage={setLanguage} />
  )
}

export default FullGrid
