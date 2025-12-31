import createLocalStore from 'react-local-storage-manager'
import { z } from "zod"

const LanguageEnum = z.enum(["en", "tr"])

const store = createLocalStore(
  'language', 
  (data) => LanguageEnum.parse(data), 
  'tr' // default language
)

export const useLanguage = store.use

export const toggleLanguage = () => {
  store.set(current => (current === 'en' ? 'tr' : 'en'))
}