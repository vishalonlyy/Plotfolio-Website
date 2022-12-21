
import { Box, TableContainer, Table, TableCaption, Thead, Tr, Th, Td, Tbody, Tfoot,  Container, Image, Text, Heading, Stack, Center, Button, VStack, StackDivider, Menu, useColorMode ,IconButton, MenuButton, MenuOptionGroup, MenuList, MenuItemOption, MenuDivider} from '@chakra-ui/react'
import Styler_ from '../styles/extras/Extra.module.scss'
export default function ComponentsusedForWEB() {
    return (
        <TableContainer>
        <Table variant='simple'>
          <TableCaption color={'white'} fontSize={'15px'}>Components Used In Sites Are All Styleing Components Given Free Infos On the Top Everything Used Here is For Free CONTACT [vishalrajpurohiit416@gmail.com] For ANY quries & questions </TableCaption>
          <Thead>
            <Tr>
                        <Th>Components Used In Website</Th>
                        <Th>Sources[Free]</Th>
                         <Th>Site Infos</Th>
              
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td bg={'pink'} fontWeight={'400'} fontFamily={'sans-serif'}>Chakara Ui Components</Td>
              <Td bg={'yellow.400'} fontWeight={'400'} fontFamily={'sans-serif'}>:Source:</Td>
             <Td bg={'blue.300'} fontWeight={'400'} fontFamily={'sans-serif'}>https://chakra-ui.com/</Td>
            </Tr>
            <Tr>
              <Td bg={'pink'} fontWeight={'400'} fontFamily={'sans-serif'}>Tailwind Components</Td>
              <Td bg={'yellow.400'} fontWeight={'400'} fontFamily={'sans-serif'}>:Source:</Td>
             <Td bg={'blue.300'} fontWeight={'400'} fontFamily={'sans-serif'}>https://tailwindcss.com/</Td>
            </Tr>
            <Tr>
              <Td bg={'pink'} fontWeight={'400'} fontFamily={'sans-serif'}>Images | Illustrations by storyset</Td>
              <Td bg={'yellow.400'} fontWeight={'400'} fontFamily={'sans-serif'}>:Sources:</Td>
               <Td bg={'blue.300'} fontWeight={'400'} fontFamily={'sans-serif'}>https://storyset.com/</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            
          </Tfoot>
        </Table>
      </TableContainer>

    )
}