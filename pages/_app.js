import '@/styles/globals.css'
import '@/styles/dropdown.css'
import { AuthProvider } from '@/context/AuthContext'

export default function App({ Component, pageProps }) {
  return <AuthProvider><Component {...pageProps} /></AuthProvider>
}
