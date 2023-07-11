import React, { useState } from 'react'



import { StyleTheme } from '../../../Helpers/StyleVariables'
import { DataJobExperiences } from '../../../Helpers/ConstVariables'

import { Container } from '../../../Components/Container/Container.styled'
import { Typography, SpanTypography } from '../../../Components/Typography/Typography.styled'
import { LineComponent } from '../../../Components/Line/Line.styled'

import MenuList from '../../../Components/Menu/MenuExperience'
import ExperienceLayout from '../Layouts/ExperienceLayout'

import { motion } from 'framer-motion'
import { dissolveEffect01 } from '../../../Helpers/VariantsAnimation'

import { useMediaQuery } from 'react-responsive'

export default function Experience({ innerRef }) {

    const [dataJobExp, setDataJobExp] = useState(DataJobExperiences)
    const [menuActive, setMenuActive] = useState('')

    const isMobile = useMediaQuery({ query: `(max-width: ${StyleTheme.resolution.mobile})` });
    const isTablet = useMediaQuery({ query: `(max-width: ${StyleTheme.resolution.tablet})` });


    const handleMenuActive = (section) => {

        let jobSection = dataJobExp

        for (let x of jobSection) {
            if (x.titlejob === section) {
                x.active = true
            } else {
                x.active = false
            }
        }
        setDataJobExp(jobSection)
        setMenuActive(section)
    }

    return (
        <>
            <Container ref={innerRef} display='flex' flexdirection='column' margin={isMobile || isTablet ? '0 0 80px 0' : '0 0 13rem 0'}>
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    variants={dissolveEffect01}
                >
                    <Container display='flex' margin='0 0 24px 0'>
                        <Container flex={isMobile ? '65%' : isTablet ? '40%' : '25%'}>
                            <Typography ffamily={StyleTheme.font.roboto} fsize={isMobile ? '22px' : '26px'} fweight='500' color={StyleTheme.colorpalette.white02}>
                                <SpanTypography ffamily={StyleTheme.font.firacode} fsize={isMobile ? '18px' : '20px'} color={StyleTheme.colorpalette.green04}>02. </SpanTypography>
                                Work Experiences
                            </Typography>
                        </Container>
                        <Container flex={isMobile ? '25%' : isTablet ? '55%' : '45%'}>
                            <LineComponent color={StyleTheme.colorpalette.white01} margin='16px 0 0 0' />
                        </Container>
                        <Container display={isMobile || isTablet ? 'none' : 'block'} flex='25%'></Container>
                    </Container>
                    <Container display='flex' gap='2%' width={isMobile ? '100%' : '75%'}>
                        <Container flex='25%'>
                            {
                                dataJobExp.map((item, index) => (
                                    <MenuList onClick={() => handleMenuActive(item.titlejob)} key={index} title={item.locationshort} active={item.active} checkRender={menuActive} />
                                ))
                            }
                        </Container>
                        <Container flex='75%'>
                            {
                                dataJobExp.filter(data => data.active === true).map((item, index) => (
                                    <ExperienceLayout key={index} objectData={item} />
                                ))
                            }
                        </Container>
                    </Container>
                </motion.div>
            </Container>
        </>
    )
}
