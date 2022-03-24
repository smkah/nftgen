import '../styles/global.css'
import 'react-folder-tree/dist/style.css'

import type { AppProps } from 'next/app'
import FilesProvider from '../context/FilesContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <FilesProvider>
    <Component {...pageProps} />
  </FilesProvider>
}

export default MyApp