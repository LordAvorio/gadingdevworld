import React from 'react'

import styled from 'styled-components'

import { Container } from '../../../../Components/Container/Container.styled'
import { Typography } from '../../../../Components/Typography/Typography.styled'

import { StyleTheme } from '../../../../Helpers/StyleVariables'



const ImageProject = styled.a`
    max-width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || 'auto'};
    padding: ${({ padding }) => padding || '0'};
    margin: ${({ margin }) => margin || '0'};
    display: ${({ display }) => display || 'block'};
    flex-direction: ${({ flexdirection }) => flexdirection || ''};
    background-size: ${({ bsize }) => bsize || ''};
    background-position: ${({ bposition }) => bposition || ''};
    background-image: ${({ urlimage }) => urlimage || ''};
    border-radius: ${({ bradius }) => bradius || ''};
    background-blend-mode: multiply;
    background-color: ${({ theme }) => theme.colorpalette.blue01};

`

function FeaturedProjectsMobile(props) {


    return (
        <>
            <Container display='flex' flexwrap='wrap' flexdirection='column'>
                {
                    props.data.map((item, index) => (
                        <Container key={index}>
                            <ImageProject
                                display='flex'
                                flexdirection='column'
                                urlimage={item.image}
                                padding='26px'
                                bradius='6px'
                            >
                                <Typography ffamily={StyleTheme.font.firacode} fweight='500' fsize={'16px'} padding='0 0 10px 0' color={StyleTheme.colorpalette.green04}>Featured Projects</Typography>
                                <Typography ffamily={StyleTheme.font.roboto} fweight='500' fsize='20px' padding='0 0 28px 0' color={StyleTheme.colorpalette.white02}>{item.title}</Typography>
                                <Typography ffamily={StyleTheme.font.roboto} fweight='500' fsize='14px' fheight='26px' color={StyleTheme.colorpalette.white01}>{item.description}</Typography>
                                <Container display='flex' gap='14px' padding='20px 0'>
                                    {
                                        item.technology.map((item, index) => (
                                            <Typography key={index} ffamily={StyleTheme.font.firacode} fweight='500' fsize='14px' color={StyleTheme.colorpalette.white02}>{item}</Typography>
                                        ))
                                    }
                                </Container>
                            </ImageProject>
                        </Container>
                    ))
                }
            </Container>
        </>
    )
}

export default FeaturedProjectsMobile