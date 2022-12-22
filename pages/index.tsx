import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Vishal_Home } from '../components/main'
import { useColorMode } from '@chakra-ui/color-mode'
import { Heading } from '@chakra-ui/layout'
import React from 'react'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <Vishal_Home />
      <Footer/>
    </div>
    
  )
}
