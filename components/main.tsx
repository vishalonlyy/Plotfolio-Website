import { Box, Container, Flex, Image, Text, Heading, Stack, Center, Button, VStack, StackDivider, Menu, useColorMode , useBreakpointValue, IconButton, MenuButton, MenuOptionGroup, MenuList, MenuItemOption, MenuDivider} from '@chakra-ui/react'
import {
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons';
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'
import * as Redirect from './themes/redirects'
import Main_Design from '../styles/main/main.module.scss'
import Features_Design from '../styles/main/features.module.scss'
import Drawer from '../styles/components/Drawer.module.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faCheckCircle, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Styler_ from '../styles/main/Styler.module.scss'
import Vishal from '../styles/Vishal/main/main.module.scss'
import React, {useState} from 'react'
import { ColorModeScript } from "@chakra-ui/react"

import theme from './themes/chakara'
import * as ThemePack from './themes/Custom_theme'

// part 
import { Navigation } from './navbar'

//Images
import Imager from '../../public/images/Vishal_Back.jpg'
export function Vishal_Home() {
  const [IsOpen, setIsOpen] = useState(false)
  const [Animation, setAnimation] = useState(false)
  const TA = () => {
    Animation ? setAnimation(false) : setAnimation(true)
  }
  const ToggleOpen = () => {
    IsOpen ? setIsOpen(false) : setIsOpen(true)
    console.log(IsOpen)
  }
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    
    < >
 
      <Navigation/>
         <Box className={Vishal.Conatiner_Background_Property_}>
          <section className={Vishal.Main_Frame}>
            <div className={Vishal.Main_Text}>
            <h1 className={Vishal.headings}>Hey There! 👋 </h1>
            <h2 className={Vishal.Intro_1}>I&apos;am Vishal </h2>
            {/**<h2 className={Vishal.Intro_2}></h2>*/}
            <h3 className={Vishal.h3}>
 <span className={Vishal.span}>Developer, Coder, Web Developer, Full stack, Backend Developer</span>


              <div className={Vishal.scroll_more}>↓</div>
 </h3>
            </div>
          {/* <div className={Vishal.Vishal_Image}>
            <img className={Vishal.Vishal_Image} src="/images/Vishal.jpg" alt="" />
          </div>*/}
        </section>

      </Box>
      <section className={Vishal.Section_Second}>
      <Heading size='md' fontSize='30px' color={'purple.400'} className={Vishal.headings}>Introduction</Heading>
        <Box className={Vishal.S_Grid}>
         
          <div className={Vishal.S_Image}>
          <Image className={Vishal.S_Image}
      src="/images/Vishal.jpg"
      alt=""
      
    />

</div>
          <div className={Vishal.S_Text_Frame}>
            <h1 className={Vishal.S_Main_Text}>hellow My self Vishal</h1>
            <span className={Vishal.S_Line1}>I Love To Code🦖</span>
            <h1 className={Vishal.S_Line2}>A Passionate Developer ✔
              who Love Building Web,Scripts And Projects with
JavaScript, Python, Java, Nodejs, Express.js, EJS and much more etc.. </h1>
          </div>
          
        </Box></section>
      {/***************************Third Section */}
      <section className={Vishal.Third_Section}>
        <Box className={Vishal.T_Grid}>
          
          <div className={Vishal.T_Text_Frame}>
            <h1 className={Vishal.T_Head}>Check It Out</h1>
            Get Your Own Portfolio Website Contact Now For Free
            Or Get it From Our Github Page <br />
            <button className={Vishal.Click_Me} role="button">Contact Us</button>
            <button className={Vishal.Click_Me_Github} role="button">Github</button>
          </div>

          <div className={Vishal.T_Image}>
          <span className={Vishal.T_EmptyCircle}></span>
          </div>
</Box>
      </section>
      {/****Projects Section******************/}
      <section className={Vishal.Projects_Section}>
        <Box className={Vishal.P_Grid}>
          <div className={Vishal.P_Image}>
            <Image className={ Vishal.P_Image} src="/images/Projects.png" alt="" />
          </div>
          <div className={Vishal.P_Text_Frame}>
          <h1 className={Vishal.T_Head}>Projects</h1>
            Hey Aren&apos;t You Execited To View Some More Cool Stuffs and Projects which Are Just Incredible?
              Lets Explore Some More Cool Stuffs <br />
              <button className={Vishal.Click_Me} role="button">Projects</button>
          </div>

        </Box>
        <Box>

        </Box>
      </section>
        </>
    )
}