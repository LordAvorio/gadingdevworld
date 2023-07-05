import React from 'react'


import { Container } from '../../Components/Container/Container.styled'
import { Typography } from '../../Components/Typography/Typography.styled'

import { StyleTheme } from '../../Helpers/StyleVariables'

import { Codesandbox } from 'react-feather'


function ListItemIcon(props) {

    return (
        <>
            <Container display='flex' margin='0 0 0.75rem 0'>
                <Container flex={props.iconColumnSize}>
                    <Codesandbox color={props.iconColor} size={props.iconSize} strokeWidth={props.strokeSize} />
                </Container>
                <Container flex={props.iconTextSize}>
                    <Typography ffamily={props.textFont} fheight={props.textHeight} fsize={props.textSize} fweight={props.textWeight} color={props.textColor}>
                        {props.data}
                    </Typography>
                </Container>
            </Container>
        </>
    )
}

export default ListItemIcon