import React from 'react'

import { StyleTheme } from '../../../Helpers/StyleVariables'
import { handleReferralLink } from '../../../Helpers/UtilFunctions'
import { Container } from '../../../Components/Container/Container.styled'
import { Typography } from '../../../Components/Typography/Typography.styled'

import IconButton from '../../../Components/Button/IconButton/IconButton'

import { useMediaQuery } from 'react-responsive'

export default function HeroSection() {

  const isMobile = useMediaQuery({ query: `(max-width: ${StyleTheme.resolution.mobile})` });
  const isTablet = useMediaQuery({ query: `(max-width: ${StyleTheme.resolution.tablet})` });

  return (
    <>
      <Container display='flex' flexdirection='column' margin={isMobile || isTablet ? '0 0 100px 0' : '0 0 15.625rem 0'}>
        <Typography ffamily={StyleTheme.font.firacode} fsize={isMobile ? '14px' : '1.125rem'} color={StyleTheme.colorpalette.green04} margin='0 0 0.75rem 0'>
          Hi, my name is
        </Typography>
        <Typography ffamily={StyleTheme.font.roboto} fsize={isMobile ? '26px' : '3.75rem'} fweight='500' color={StyleTheme.colorpalette.white02} margin='0 0 0.375rem 0'>
          Gading Condro Prakoso.
        </Typography>
        <Typography ffamily={StyleTheme.font.roboto} fsize={isMobile ? '28px' : '4rem'} fweight='500' color={StyleTheme.colorpalette.white01} margin='0 0 1.5rem 0'>
          Tech Enthusiast.
        </Typography>
        <Container width={isMobile || isTablet ? '100%' : '70%'}>
          <Typography ffamily={StyleTheme.font.roboto} fsize={isMobile ? '14px' : '1.125rem'} fweight='400' fheight='1.75rem' color={StyleTheme.colorpalette.white01} margin='0 0 2.5rem 0'>
            I&apos;am a Software Developer based in Indonesia specialising in building web applications for 2 years experience. A tech enthusiast and love to learning some new technologies.
            Have a dream to be a millionaire from my passion as software developer.
          </Typography>
        </Container>
        <Container display='flex' flexdirection='row' gap='2.5rem'>
          <IconButton icon='linkedin' textinfo='Linkedin' iconstroke={1.5} iconsize={24} onClick={() => handleReferralLink('linkedin')}/>
          <IconButton icon='github' textinfo='Github' iconstroke={1.5} iconsize={24} onClick={() => handleReferralLink('github')} />
        </Container>
      </Container>
    </>
  )
}
