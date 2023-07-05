import React from 'react'

import styled from 'styled-components'

import { Container } from '../../../Components/Container/Container.styled'
import { Typography } from '../../../Components/Typography/Typography.styled'
import { StyleTheme } from '../../../Helpers/StyleVariables'

const ImageProject = styled.a`
    max-width: ${({ width }) => width || '100%' };
    height: ${({ height }) => height || 'auto'};
    padding: ${({ padding }) => padding || '0'};
    margin: ${({ margin }) => margin || '0'};
    display: ${({ display }) => display || 'block'};
    background-size: ${({ bsize }) => bsize || ''};
    background-position: ${({ bposition }) => bposition || ''};
    background-image: ${({ urlimage }) => urlimage || ''};
    border-radius: ${({ bradius }) => bradius || ''};
    background-blend-mode: overlay;
    background-color: rgba(100,255,218,0.1);
    transition: background-color 0.5s ease-in;
    cursor: pointer;

    &:hover{
        background-color: rgba(100,255,218,0);
    }

`

export default function FeaturedProjects(props) {
    return (
        <>
            <Container display='grid' gridtemplatecolumn='repeat(12, 1fr)'>
                <Container gridcolumn='1 / 7' gridrow='1 / -1' position='relative' zindex='1'>
                    <Container display='flex' flexdirection='column' padding='20px 0 20px 0'>
                        <Typography ffamily={StyleTheme.font.firacode} fweight='500' fsize='14px' padding='0 0 10px 0' color={StyleTheme.colorpalette.green04}>Featured Project</Typography>
                        <Typography ffamily={StyleTheme.font.roboto} fweight='500' fsize='24px' padding='0 0 24px 0' color={StyleTheme.colorpalette.white02}>{props.datamainprojects.title}</Typography>
                        <Container display='flex' bradius='6px' padding='20px' margin='0 0 24px 0' bgcolor={StyleTheme.colorpalette.blue07}>
                            <Typography ffamily={StyleTheme.font.roboto} fweight='500' fsize='16px' fheight='26px' color={StyleTheme.colorpalette.white01}>{props.datamainprojects.description}</Typography>
                        </Container>
                        <Container display='flex' gap='14px'>
                            {
                                props.datamainprojects.technology.map((item, index) => (
                                    <Typography key={index} ffamily={StyleTheme.font.firacode} fweight='500' fsize='14px' color={StyleTheme.colorpalette.white01}>{item}</Typography>
                                ))
                            }
                        </Container>
                    </Container>
                </Container>
                <Container gridcolumn='6 / -1' gridrow='1 / -1'>
                    <ImageProject
                        urlimage={props.datamainprojects.image}
                        height='100%'
                        bsize='cover'
                        bradius='8px'
                    />
                </Container>
            </Container>

        </>
    )
}
