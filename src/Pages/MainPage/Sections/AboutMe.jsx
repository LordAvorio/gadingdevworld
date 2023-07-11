import React from 'react'

import { Container } from '../../../Components/Container/Container.styled'
import { SpanTypography, Typography } from '../../../Components/Typography/Typography.styled'
import { LineComponent } from '../../../Components/Line/Line.styled'
import { ImageType01 } from '../../../Components/Image/ImageType01.styled'

import { DataRecentlyTech } from '../../../Helpers/ConstVariables'
import { StyleTheme } from '../../../Helpers/StyleVariables'

import { useMediaQuery } from 'react-responsive'

import { motion } from 'framer-motion'
import { dissolveEffect01 } from '../../../Helpers/VariantsAnimation.js'

import ListItemIcon from '../../../Components/ListItems/ListItemIcon'

export default function AboutMe({ innerRef }) {

    const isMobile = useMediaQuery({ query: `(max-width: ${StyleTheme.resolution.mobile})` });
    const isTablet = useMediaQuery({ query: `(max-width: ${StyleTheme.resolution.tablet})` });

    return (
        <>
            <Container ref={innerRef} display='flex' flexdirection='column' margin={isMobile || isTablet ? '0 0 80px 0' : '0 0 13rem 0'}>
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    variants={dissolveEffect01}
                >
                    <Container display='flex'>
                        <Container flex={isMobile ? '45%' : isTablet ? '25%' : '18%'}>
                            <Typography ffamily={StyleTheme.font.roboto} fsize={isMobile ? '22px' : '1.625rem'} fweight='500' color={StyleTheme.colorpalette.white02}>
                                <SpanTypography ffamily={StyleTheme.font.firacode} fsize={isMobile ? '18px' : '1.25rem'} color={StyleTheme.colorpalette.green04}>01. </SpanTypography>
                                About Me
                            </Typography>
                        </Container>
                        <Container flex={isMobile ? '55%' : isTablet ? '70%' : '36%'}>
                            <LineComponent color={StyleTheme.colorpalette.white01} margin='1rem 0 0 0' />
                        </Container>
                        <Container display={isMobile || isTablet ? 'none' : 'block'} flex='50%'></Container>
                    </Container>
                    <Container display='flex' margin='1.25rem 0 0 0' flexwrap={isMobile ? 'wrap-reverse' : 'wrap'}>
                        <Container flex={isMobile ? '100%' : '55%'}>
                            <Typography ffamily={StyleTheme.font.roboto} fheight='1.5rem' fsize={isMobile ? '14px' : '1rem'} fweight='400' color={StyleTheme.colorpalette.white01} margin='0 0 1.25rem 0'>
                                Hello everyone ! My name is Gading Condro Prakoso but you can call me Gading. I am a software developer based in Indonesia and i love to code because it&apos;s train you to develop your creativity and logic.
                            </Typography>
                            <Typography ffamily={StyleTheme.font.roboto} fheight='1.5rem' fsize={isMobile ? '14px' : '1rem'} fweight='400' color={StyleTheme.colorpalette.white01} margin='0 0 1.25rem 0'>
                                My interest in technology started back in 2013 when i was learning Pascal as my first programming language on senior high school. From that i was trying to learning web development and it was so fun.
                            </Typography>
                            <Typography ffamily={StyleTheme.font.roboto} fheight='1.5rem' fsize={isMobile ? '14px' : '1rem'} fweight='400' color={StyleTheme.colorpalette.white01} margin='0 0 1.25rem 0'>
                                As a software developer my goal is always to build applications that are scallable and eficient under the hood while providing engaging, pixel-perfect user experiences.
                            </Typography>
                            <Typography ffamily={StyleTheme.font.roboto} fheight='1.5rem' fsize={isMobile ? '14px' : '1rem'} fweight='400' color={StyleTheme.colorpalette.white01} margin='0 0 1.25rem 0'>
                                Here are few technologies I&apos;ve been working with recently:
                            </Typography>
                            <Container display='flex'>
                                <Container flex='30%'>
                                    <Container display='flex' flexdirection='column'>
                                        {
                                            DataRecentlyTech.frontend.map((item, index) => (
                                                <ListItemIcon
                                                    key={index}
                                                    data={item}
                                                    iconColumnSize='15%'
                                                    iconTextSize='80%'
                                                    iconColor={StyleTheme.colorpalette.green04}
                                                    iconSize={isMobile || isTablet ? 16 : 18}
                                                    strokeSize={isMobile || isTablet ? 1.5 : 2}
                                                    textFont={StyleTheme.font.roboto}
                                                    textSize={isMobile || isTablet ? '14px' : '1rem'}
                                                    textWeight='400'
                                                    textColor={StyleTheme.colorpalette.white01}
                                                />
                                            ))
                                        }
                                    </Container>
                                </Container>
                                <Container flex='30%'>
                                    <Container display='flex' flexdirection='column'>
                                        {
                                            DataRecentlyTech.backend.map((item, index) => (
                                                <ListItemIcon
                                                    key={index}
                                                    data={item}
                                                    iconColumnSize='15%'
                                                    iconTextSize='80%'
                                                    iconColor={StyleTheme.colorpalette.green04}
                                                    iconSize={isMobile || isTablet ? 16 : 18}
                                                    strokeSize={isMobile || isTablet ? 1.5 : 2}
                                                    textFont={StyleTheme.font.roboto}
                                                    textSize={isMobile || isTablet ? '14px' : '1rem'}
                                                    textWeight='400'
                                                    textColor={StyleTheme.colorpalette.white01}
                                                />
                                            ))
                                        }
                                    </Container>
                                </Container>
                                <Container flex='30%'>
                                    <Container display='flex' flexdirection='column'>
                                        {
                                            DataRecentlyTech.utility.map((item, index) => (
                                                <ListItemIcon
                                                    key={index}
                                                    data={item}
                                                    iconColumnSize='15%'
                                                    iconTextSize='80%'
                                                    iconColor={StyleTheme.colorpalette.green04}
                                                    iconSize={isMobile || isTablet ? 16 : 18}
                                                    strokeSize={isMobile || isTablet ? 1.5 : 2}
                                                    textFont={StyleTheme.font.roboto}
                                                    textSize={isMobile || isTablet ? '14px' : '1rem'}
                                                    textWeight='400'
                                                    textColor={StyleTheme.colorpalette.white01}
                                                />
                                            ))
                                        }
                                    </Container>
                                </Container>
                            </Container>
                        </Container>
                        <Container flex={isMobile ? '100%' : '45%'} display='flex' justify='center' margin={isMobile ? '0 0 50px 0' : '0'}>
                            <ImageType01
                                path='url(src/Assets/Images/GCO-Image.jpg)'
                                bbmode='multiply'
                                bcolor={StyleTheme.colorpalette.green04}
                                margin={isMobile || isTablet ? '0' : '0 2.5rem'}
                                bsize='cover'
                                bposition='center'
                                width={isMobile || isTablet ? '200px' : '100%'}
                                height={isMobile || isTablet ? '200px' : '21.25rem'}
                                bradius='6px'
                            />
                        </Container>
                    </Container>
                </motion.div>
            </Container>
        </>
    )
}
