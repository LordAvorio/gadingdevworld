import React, {useEffect} from 'react'

import styled from 'styled-components'

import { Container } from '../Container/Container.styled'
import { Typography } from '../Typography/Typography.styled'

import { StyleTheme } from '../../Helpers/StyleVariables'

const TextMenu = styled(Typography)`
    
    transition: color 0.5s ease-in;
    &:hover{
        cursor: pointer;
        color: ${({ theme }) => theme.colorpalette.green04};
    }

`

const MenuContainer = styled(Container)`
    border-left: ${({ bleft }) => bleft || '' };
    transition: all 0.5s ease-in;
    &:hover{
        cursor: pointer;
        background-color: ${({ theme }) => theme.colorpalette.blue07};
    }
`

export default function MenuExperience(props) {

    const handleEventClick = () => {
        props.onClick()
    }

    useEffect(() => {},[props.checkRender])

    return (
        <>
            <Container display='flex' flexdirection='column'>
                <MenuContainer onClick={handleEventClick} bleft={`1.5px solid ${props.active ? StyleTheme.colorpalette.green04 : StyleTheme.colorpalette.white01}`}>
                    <TextMenu
                        ffamily={StyleTheme.font.firacode}
                        color={props.active ? StyleTheme.colorpalette.green04 : StyleTheme.colorpalette.white01}
                        padding='10px 20px'
                        fsize='14px'>
                        {props.title}
                    </TextMenu>
                </MenuContainer>
            </Container>
        </>
    )
}
