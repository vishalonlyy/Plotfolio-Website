import '../styles/globals.css'
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { useTheme } from "@chakra-ui/react";
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../components/themes/chakara';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import * as React from 'react'



export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} >
      <Component {...pageProps} />
    </ChakraProvider>
    
)}
