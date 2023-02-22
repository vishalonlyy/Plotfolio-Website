import { useState } from 'react';
import { TextEncoder } from 'text-encoding';
import { Box, Container, Flex, Image, Text, Heading, Stack, Center, Button, VStack, StackDivider, Menu, useColorMode , useBreakpointValue, IconButton, MenuButton, MenuOptionGroup, MenuList, MenuItemOption, MenuDivider} from '@chakra-ui/react'

const Styler = require('../styles/extras/AII.module.scss')
const MyPage = () => {
  const [text, setText] = useState('');
  const [greeting, setGreeting] = useState('');
  const [newThing, setNewThing] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleKeyDown = async(event:any) => {
    if (event.key === 'Enter') {
      console.log(text);
      const { message, newThing } = await getGreeting(text)
      setGreeting(message);
      setNewThing(newThing);
    }
  };

  const handleChange = (event:any) => {
    setText(event.target.value);
  };

  const handleClick = async() => {
    console.log(text);
  
    const { message, newThing } = await getGreeting(text)
    setGreeting(message);
    setNewThing(newThing);
  };
  

  
  
  
  

  const getGreeting = (name:any) => {
    const data = require('../public/data.json');
    const match = data.find((item:any) => item.name === name);
    const message = match ? match.greeting : '';
    const newThing = match ? match.Text : '';
    return { message,newThing }
  };

  const sendToDiscord = async (message:any ) => {
    const data = require('../public/data.json');
    
    const buffer = new TextEncoder().encode(JSON.stringify({ content: message }));
    
    await fetch("https://discord.com/api/webhooks/1076418000430841947/AIhHvhxXO_fsQBu1w2I8CSsFDqz5lpcKBRV129s_TOLHc9krOj6pCfBqUhxc3I-gfPJl", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: buffer,
      
    });
    
  };

  const handleSend = async () => {
    await sendToDiscord(text);
    
    const { message, newThing } = await getGreeting(text)
    setGreeting(message);
    setNewThing(newThing);
    
    
  };
  const handleSelect = async (event: any) => {
    setSelectedOption(event.target.value);
  
    if (event.target.value === 'option1') {
      const data = require('../public/data.json');
      const match = data.find((item: any) => item.name === text);
      const newThing = match ? match.AmiImportant : `No Data Available Do You Want The Data Related ?\n\n::  Is ${text} Important??`;
      setNewThing(newThing);
      await sendToDiscord(text+'____Am I Important??');
    }
    else if (event.target.value === 'option2') {
        const data = require('../public/data.json');
        const match = data.find((item: any) => item.name === text);
        const newThing2 = match ? match.WhatIthink : `No Data Available Do You Want The Data Related ?\n\n::  What Vishal Thinks, about ${text}?`;
        setNewThing(newThing2);
        await sendToDiscord(text+'____WhatIThink?');
      
     } 
     else if (event.target.value === 'option3') {
        const data = require('../public/data.json');
        const match = data.find((item: any) => item.name === text);
        const newThing = match ? match.Everything : `No Data Available Do You Want The Data Related ?\n\n::  Everything About ${text}:Vishal Thinks? `;
        setNewThing(newThing);
        await sendToDiscord(text+'____Everything About Me');
     } else {
      const data = require('../public/data.json');
      const match = data.find((item: any) => item.name === event.target.value);
      const newThing = match ? match.Text : `No Data Available For ${text} Do You want ? My System can create based on Chats`;
      setNewThing(newThing);
    }
  };
  return (
    <Container className={Styler.container}>
      <Box className={Styler.Box}>
        <div className={Styler.TextBox} >
          <div>
            <p className={Styler.P}>Enter Your Name To Proceed</p>
            <input type="text" value={text} onChange={handleChange} onKeyDown={handleKeyDown} className={Styler.Input}  placeholder="Your name.."/>
            <div className={Styler.ButtonStyle}>
              <button className={Styler.Button} onClick={handleSend}>Display</button>
            </div>
          </div>
        </div>
        <div className={Styler.SecondBox}>
<div>
<p className={Styler.P}>Choose an option below to display more text:</p>
<div className={Styler.Select}>
<select onChange={handleSelect} value={selectedOption} className={Styler.SelectInput}>
<option value="" disabled>Choose an option</option>
<option value="option1">I am Important To You?</option>
<option value="option2">What Do You Think About Me?</option>
<option value="option3">Everything You Think About Me</option>
</select>
</div>
<div className={Styler.Text}>
{greeting && (
<Text fontSize="xl">
{greeting}
</Text>
)}
{newThing && (
<Text fontSize="md">
{newThing}
</Text>
)}
</div>
</div>
</div>
</Box>
</Container>
);
};

export default MyPage;
