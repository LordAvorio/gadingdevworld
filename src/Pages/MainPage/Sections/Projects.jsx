import React from 'react'


import { Container } from '../../../Components/Container/Container.styled'
import { Typography, SpanTypography } from '../../../Components/Typography/Typography.styled'
import { LineComponent } from '../../../Components/Line/Line.styled'
import { DataMainProjects } from '../../../Helpers/ConstVariables'

import { StyleTheme } from '../../../Helpers/StyleVariables'

import FeaturedProjects from '../Layouts/FeaturedProjects'
import FeaturedProjectsMobile from '../Layouts/Mobile/FeaturedProjectsMobile'
import OtherProjects from '../Layouts/OtherProjects'

import { useMediaQuery } from 'react-responsive'

import { motion } from 'framer-motion'
import { dissolveEffect01 } from '../../../Helpers/VariantsAnimation'

function Projects({ innerRef }) {

    const isMobile = useMediaQuery({ query: `(max-width: ${StyleTheme.resolution.mobile})` });
    const isTablet = useMediaQuery({ query: `(max-width: ${StyleTheme.resolution.tablet})` });

    return (
        <>
            <Container ref={innerRef} display='flex' flexdirection='column' margin='0 0 100px 0'>
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    variants={dissolveEffect01}
                >
                    <Container display='flex' margin='0 0 24px 0'>
                        <Container flex={isMobile ? '50%' : isTablet ? '30%' : '25%'}>
                            <Typography ffamily={StyleTheme.font.roboto} fsize={isMobile ? '22px' : '26px'} fweight='500' color={StyleTheme.colorpalette.white02}>
                                <SpanTypography ffamily={StyleTheme.font.firacode} fsize={isMobile ? '16px' : '20px'} color={StyleTheme.colorpalette.green04}>03. </SpanTypography>
                                My Projects
                            </Typography>
                        </Container>
                        <Container flex={isMobile ? '50%' : isTablet ? '65%' : '45%'}>
                            <LineComponent color={StyleTheme.colorpalette.white01} margin='16px 0 0 0' />
                        </Container>
                        <Container display={isMobile || isTablet ? 'none' : 'block'} flex='25%'></Container>
                    </Container>
                    {
                        !isMobile && !isTablet
                            ?
                            DataMainProjects.map((item, index) => (
                                <FeaturedProjects key={index} datamainprojects={item} />
                            ))
                            :
                            <FeaturedProjectsMobile data={DataMainProjects} />
                    }
                    <OtherProjects />
                </motion.div>
            </Container>
        </>
    )
}

export default Projects