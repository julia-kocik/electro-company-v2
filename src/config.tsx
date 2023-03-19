// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'

interface articleType {
  title: string
  content: string
  main_image: string
  published: any
}
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAT2mrPinmzxakHGRZN7YCS3VqwX7lqjA8',
  authDomain: 'fire-cms-231a3.firebaseapp.com',
  projectId: 'fire-cms-231a3',
  storageBucket: 'fire-cms-231a3.appspot.com',
  messagingSenderId: '64979939256',
  appId: '1:64979939256:web:2930d5a5623e50e8c2694d'
}

initializeApp(firebaseConfig)

const db = getFirestore()

export const getArticles = async (): Promise<articleType[]> => {
  const articlesRef = collection(db, 'articles')
  const querySnapshot = await getDocs(articlesRef)
  const articles = []

  for (const doc of querySnapshot.docs) {
    const article = doc.data() as articleType
    const storageRef = ref(getStorage(), article.main_image)
    const imageUrl = await getDownloadURL(storageRef)
    article.main_image = imageUrl
    articles.push(article)
  }

  return articles
}
