"use client";

import { useEffect, useState } from 'react';
import { Stack, Box, Tooltip, List, ListItem, ListItemText, ListSubheader } from '@mui/material';
import Image from 'next/image'
import Resume from './JLarsenResumeFall2024.pdf';
import J22 from './j22.png';

export default function Home() {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-around" style={{width: '100%', height: '100%'}}>
      <Stack direction='column' alignItems="center" style={{padding: '15px', width: '350px'}}>
        <Stack direction='row' alignItems="center">
          <Stack direction='column' minWidth='200px' minHeight='200px' textAlign="center" justifyContent="center" alignItems="center">
            <Stack style={{marginBottom: '15px'}}>
              <h1 style={{fontWeight: 'bold', fontSize: 'x-large'}}>Julian Larsen</h1>
              <Tooltip title="Don't Panic! I code too." placement='top'>
                <h1 style={{fontSize: 'small'}}>I'm probably sailing</h1>
              </Tooltip>
            </Stack>
            <Stack direction="row" justifyContent="space-evenly">
              <svg onClick={()=>{window.open('https://github.com/cosjulian')}} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{width: '32px', height: '32px', marginRight: '5px'}}><path className='svgLink' d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"></path></svg>
              <svg onClick={()=>{window.open('https://www.linkedin.com/in/j-larsen/')}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width: '32px', height: '32px'}}><path className='svgLink' d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
            </Stack>
          </Stack>
          <Box minWidth='200px' minHeight='200px' onClick={()=>window.open('/')}>
            <Image src={J22}/>
          </Box>
        </Stack>
        <Stack textAlign="left" style={{width: '100%', marginTop: '75px'}}>
          <h2 style={{fontSize: 'larger'}}>Hei hei!</h2><br/>
          <h2>My name is Julian. I currently study at the University of Central Florida. I'm interested in <span className='link'>computer vision</span> and sailing. If you are interested in getting to know me more, you can checkout my <span className='link' onClick={()=>{window.open(Resume)}}>Resume</span>. </h2>
        </Stack>
        <Stack textAlign="left" style={{width: '100%', marginTop: '25px'}}>
          <h2>Some projects I'm working on:</h2>
        </Stack>
      </Stack>
    </Stack>
  );
}
