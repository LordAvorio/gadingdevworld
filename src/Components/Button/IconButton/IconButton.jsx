import React from 'react'

import styled from 'styled-components'
import { GitHub, Linkedin, Mail } from 'react-feather'

import { StyleTheme } from '../../../Helpers/StyleVariables'
import { Container } from '../../Container/Container.styled'
import { Typography } from '../../../Components/Typography/Typography.styled'




const ButtonContainer = styled.a`
    display: ${({ display }) => display || 'block'};
    max-width: ${({ width }) => width || 'auto'};
    padding: ${({ padding }) => padding || '0'};
    margin: ${({ margin }) => margin || '0'};
    flex: ${({ flex }) => flex || ''};
    gap: ${({ gap }) => gap || ''};
    border: ${({ border }) => border || ''};
    border-radius: ${({ bradius }) => bradius || ''};
    cursor: ${({ cursor }) => cursor || 'default'};
    background-color: ${({ bgcolor }) => bgcolor || ''};
    transition: ${({ transition }) => transition || ''};
    
    &:hover{
        background-color: ${({ bgcolorafter }) => bgcolorafter || ''};
    }

`


export default function IconButton(props) {

    let typeIconContent

    switch (props.icon) {
        case 'linkedin':
            typeIconContent = <Linkedin color={StyleTheme.colorpalette.green04} size={props.iconsize} strokeWidth={props.iconstroke} />
            break;
        case 'github':
            typeIconContent = <GitHub color={StyleTheme.colorpalette.green04} size={props.iconsize} strokeWidth={props.iconstroke}/>
            break;
        case 'mail':
            typeIconContent = <Mail color={StyleTheme.colorpalette.green04} size={props.iconsize} strokeWidth={props.iconstroke}/>
            break;
        default:
            typeIconContent = null
            break;
    }

    const handleEventClick = () => {
        props.onClick()
    }


    return (
        <>
            <ButtonContainer
                onClick = {handleEventClick} 
                display='flex' 
                gap='5px' 
                border={'2px solid' + StyleTheme.colorpalette.green04} 
                bradius='6px' 
                padding={props.padding ? props.padding : '8px 12px'} 
                cursor='pointer'
                transition=' background-color 0.2s ease-in'
                bgcolor= 'rgba(118, 200, 147, 0)'
                bgcolorafter='rgba(118, 200, 147, 0.1)'
                >
                <Container flex={props.iconflex ? props.iconflex : '45%'}>
                    {typeIconContent}
                </Container>
                <Container flex={props.infoflex ? props.infoflex : '45%'}>
                    <Typography 
                    ffamily={StyleTheme.font.firacode} 
                    fsize='16px' color={StyleTheme.colorpalette.green04} 
                    fweight='400' 
                    padding={props.paddingtext ? props.paddingtext : '4px 0 0 0'} 
                    cursor='pointer'>
                        {props.textinfo}
                    </Typography>
                </Container>
            </ButtonContainer>
        </>
    )
}
