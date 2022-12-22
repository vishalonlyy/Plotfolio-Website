import { ReactNode } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faCheckCircle, faGear,faCross,faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Box,Flex,Avatar,HStack,Link,IconButton,Button,Menu,MenuButton,MenuList,MenuItem,MenuDivider,useDisclosure,useColorModeValue,Stack,MenuOptionGroup,MenuItemOption,background,color,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import * as Custom_Pack from '../pages/themes/Custom_theme';import NextLink from 'next/link'
const Links = ['Dashboard', 'Projects', 'Team'];
import Styler_ from '../styles/extras/Extra.module.scss'


const Contact = 'https://discord.com/invite/';
const Home = '/'
const Projects = 'https://discord.com'

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    color='white'
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
      
    }}
    href={'#'}>
    {children}
  </Link>
);

export function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('transparent','black')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/********** */}
          <HStack spacing={20} alignItems={'center'}>
            <Box> </Box>
            <HStack
                          color='white'
              as={'nav'}
              spacing={10}
                          display={{ base: 'none', md: 'flex' }}>
              <Avatar src='/images/Vishal.jpg' size={'md'} marginLeft=''><Link href='/' className={Styler_.Avataar_Links} style={{'textDecoration':'none'}}>Vishal </Link></Avatar>
              <Box> </Box>
                      {/*<Link href={Home} className={Styler_.Nav_Styler__Effects} style={{'textDecoration':'none'}}>Home</Link>*/}
              <Link href={Projects} className={Styler_.Nav_Styler__Effects} style={{'textDecoration':'none'}}>Projects</Link>
              <Link href={Contact} className={Styler_.Nav_Styler__Effects} style={{'textDecoration':'none'}}>Contact</Link>
              <Link href='/status' className={Styler_.Nav_Styler__Effects} style={{'textDecoration':'none'}}>Status</Link>
             
            </HStack>
          </HStack>
          
          <Flex alignItems={'center'} color='black'>
            
            <Menu>
              
              <IconButton
                
                backgroundColor={'transparent'}
            size={'md'}
            icon={isOpen ?  <FontAwesomeIcon icon={faClose} color='white'/>: <HamburgerIcon backgroundColor={'transparent'}  color={'white'} /> }
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
                          /> 
                      
            </Menu>
          </Flex>
        </Flex>
        
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} color='white'>
            <Stack as={'nav'} spacing={4}>
              {/*<Link href={Home} style={{ 'textDecoration': 'none' }}>Home</Link>*/}
              <Link href={Projects} style={{ 'textDecoration': 'none' }}>Projects</Link>
              <Link href={Contact} style={{ 'textDecoration': 'none' }}>Contact</Link>
              <Link href='/satus' style={{ 'textDecoration': 'none' }}>Status</Link>
              
            </Stack>
          </Box>
        ) : null}
        
      </Box>
     

    </>
  );
}