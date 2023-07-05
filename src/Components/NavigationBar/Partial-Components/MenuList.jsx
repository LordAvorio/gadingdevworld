import React from 'react'

import styled  from 'styled-components'
import { StyleTheme } from '../../../Helpers/StyleVariables'


import { Container } from '../../Container/Container.styled'
import { Typography, SpanTypography } from '../../Typography/Typography.styled'

const AnimationMenuList = styled(Typography)`
    transition: color 0.5s ease-in;
    &:hover{
        cursor: pointer;
        color: ${({ theme }) => theme.colorpalette.green04 };
    }

`

export default function MenuList(props) {

    const handleEventClick = () => {
        props.onClick()
    }

    return (
        <>
            <Container>
                <AnimationMenuList
                    ffamily={StyleTheme.font.firacode}
                    color={StyleTheme.colorpalette.white02}
                    fsize='14px'
                    onClick={handleEventClick}
                >
                    <SpanTypography
                        ffamily={StyleTheme.font.firacode}
                        color={StyleTheme.colorpalette.green04}
                        fsize='14px'
                    >
                        {props.number}
                    </SpanTypography>
                    {props.description}
                </AnimationMenuList>
            </Container>
        </>
    )

}
