import React, { useState, useEffect } from 'react'


import styled from 'styled-components'

import { useMediaQuery } from 'react-responsive';
import { Container } from '../Container/Container.styled'
import { Typography } from '../Typography/Typography.styled'
import { Menu, X } from 'react-feather';

import MenuList from '../NavigationBar/Partial-Components/MenuList'

import { StyleTheme } from '../../Helpers/StyleVariables'
import { DataNavMenu } from '../../Helpers/ConstVariables'

import { motion } from 'framer-motion'
import { navBarAnimation } from '../../Helpers/VariantsAnimation'

const SideBarMobile = styled(Container)`
  position: relative;
  animation-name: trigger-navbar;
  animation-duration: 1s;

  @keyframes trigger-navbar {
    0% {left: 100vw;}
    100% {left: 0}
  }


`;

const GlassEffectBackground = styled(Container)`
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(3px);
`


export default function NavigationBar({ handleScrollRefer }) {

  const isMobile = useMediaQuery({ query: `(max-width: ${StyleTheme.resolution.mobile})` });
  const isTablet = useMediaQuery({ query: `(max-width: ${StyleTheme.resolution.tablet})` });

  const [handlingOpenMenu, setHandlingOpenMenu] = useState(false)

  useEffect(() => {

  }, [handlingOpenMenu])

  const handleScrollReferMobile = (data) => {
    setHandlingOpenMenu(false)
    handleScrollRefer(data)
  }




  return (
    <>
      <Container display={handlingOpenMenu ? 'none' : 'flex'} padding={!isMobile && !isTablet ? '2% 6%' : '5% 4%'} bgcolor={StyleTheme.colorpalette.blue06}>
        <Container flex={isMobile ? '50%' : isTablet ? '30%' : '50%'}>
          <Typography
            ffamily={StyleTheme.font.firacode}
            color={StyleTheme.colorpalette.green04}
            fsize={isMobile ? '14px' : '16px'}
          >gading-dev-world</Typography>
        </Container>
        <Container flex={isMobile ? '50%' : isTablet ? '70%' : '50%'}>
          {
            !isMobile ? (
              <Container display='flex' gap={isTablet ? '25px' : '40px'} justify='flex-end'>
                {
                  DataNavMenu.map((item, index) => (
                    <MenuList onClick={() => handleScrollRefer(item.refercode)} key={index} number={item.number} description={item.description} />
                  ))
                }
              </Container>
            ) : (
              <Container display='flex' justify='flex-end'>
                  <Menu fontSize={24} color={StyleTheme.colorpalette.green04} onClick={() => setHandlingOpenMenu(true)}  />
              </Container>
            )
          }
        </Container>
      </Container>

    
        <SideBarMobile height='100vh' display={!handlingOpenMenu ? 'none' : 'flex'} >
          <GlassEffectBackground flex='25%' bgcolor='rgba(255, 255, 255, 0)'></GlassEffectBackground>
          <Container flex='75%' bgcolor={StyleTheme.colorpalette.blue07} padding='6%'>
            <Container display='flex' flexwrap='wrap'>
              <Container flex='100%'>
                <Container display='flex' flexdirection='row-reverse'>
                  <X size={28} color={StyleTheme.colorpalette.green04} onClick={() => setHandlingOpenMenu(false)}></X>
                </Container>
              </Container>
              <Container flex='100%'>
                <Container display='flex' flexdirection='column' allign='center' padding='25% 0'>
                  {
                    DataNavMenu.map((item, index) => (
                      <Container key={index} padding='0 0 18% 0'>
                        <Typography ffamily={StyleTheme.font.firacode} padding='0 0 12px 0' fsize={isMobile ? '18px' : '22px'} align='center' color={StyleTheme.colorpalette.green04}>{item.number}</Typography>
                          <Typography  onClick={() => handleScrollReferMobile(item.refercode)} ffamily={StyleTheme.font.roboto} fweight='300' fsize={isMobile ? '20px' : '26px'} color={StyleTheme.colorpalette.white02}>{item.description}</Typography>
                      </Container>
                    ))
                  }
                </Container>
              </Container>
            </Container>
          </Container>
        </SideBarMobile>
    </>
  )
}
