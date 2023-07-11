import React, { useRef } from 'react'

import { useMediaQuery } from 'react-responsive'

import Navigation from '../../Components/NavigationBar/NavigationBar'
import { Container } from '../../Components/Container/Container.styled'
import { StyleTheme } from '../../Helpers/StyleVariables'

import HeroSection from './Sections/HeroSection'
import AboutMe from './Sections/AboutMe'
import MyExperience from './Sections/Experience'
import MyProjects from '../../Pages/MainPage/Sections/Projects'
import Contacts from '../../Pages/MainPage/Sections/Contacts'

import styled from 'styled-components'

const TopNavigation = styled(Container)`
  width: 100%;
  top: 0;
  z-index: 5;
`


export default function MainPage() {

  const isMobile = useMediaQuery({ query: `(max-width: ${StyleTheme.resolution.mobile})` });
  const isTablet = useMediaQuery({ query: `(max-width: ${StyleTheme.resolution.tablet})` });

  const aboutMeScrollRef = useRef(null)
  const experienceScrollRef = useRef(null)
  const projectScrollRef = useRef(null)
  const contactScrollRef = useRef(null)


  const handleScrollRefer = (type) => {

    switch (type) {
      case 'about-me':
        aboutMeScrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
        break;
      case 'experience':
        experienceScrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
        break;
      case 'project':
        projectScrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        break;
      case 'contact':
        contactScrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
        break;
      default:
        break;
    }

  }

  return (
    <>
      <TopNavigation position='fixed'>
        <Navigation handleScrollRefer={handleScrollRefer} />
      </TopNavigation>
      <Container margin={isMobile || isTablet ? '25% 8%' : '10% 16%'}>
        <HeroSection />
        <AboutMe innerRef={aboutMeScrollRef} />
        <MyExperience innerRef={experienceScrollRef} />
        <MyProjects innerRef={projectScrollRef} />
        <Contacts innerRef={contactScrollRef} />
      </Container>
    </>
  )
}
