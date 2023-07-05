import React from 'react'

import { Container } from '../../../Components/Container/Container.styled'
import { Typography } from '../../../Components/Typography/Typography.styled'
import { StyleTheme } from '../../../Helpers/StyleVariables'
import { DataSecondaryProjects } from '../../../Helpers/ConstVariables'

import ProjectCards from '../../../Components/Card/ProjectCards'

export default function OtherProjects() {
    return (
        <>
            <Container display='flex' flexdirection='column' margin='100px 0 0 0 '>
                <Container margin='0 0 40px 0'>
                    <Typography ffamily={StyleTheme.font.roboto} fsize='26px' fweight='500' align='center' color={StyleTheme.colorpalette.white02}>
                        Other Noteworthy Projects
                    </Typography>
                </Container>
                <Container display='flex' gap='1.5%' flexwrap='wrap'>
                    {
                        DataSecondaryProjects.map((item, index) => (
                            <Container key={index} flex='30%' margin='0 0 24px 0'>
                                <ProjectCards data={item}/>
                            </Container>
                        ))
                    }
                </Container>
            </Container>
        </>
    )
}
