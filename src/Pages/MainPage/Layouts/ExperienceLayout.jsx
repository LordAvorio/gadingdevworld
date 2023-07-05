import React from 'react'


import { Typography, SpanTypography } from '../../../Components/Typography/Typography.styled'
import { Container } from '../../../Components/Container/Container.styled'

import { StyleTheme } from '../../../Helpers/StyleVariables'

import { Codesandbox } from 'react-feather'
import { useMediaQuery } from 'react-responsive'

import ListItemIcon from '../../../Components/ListItems/ListItemIcon'


export default function ExperienceLayout(props) {

    const isMobile = useMediaQuery({ query: `(max-width: ${StyleTheme.resolution.mobile})` });
    const isTablet = useMediaQuery({ query: `(max-width: ${StyleTheme.resolution.tablet})` });


    return (
        <>
            <Container display='flex' flexdirection='column' padding='6px 0 0 0'>
                <Container padding='0 0 12px 0'>
                    <Typography ffamily={StyleTheme.font.roboto} fsize={isMobile ? '14px' : '18px'} fweight='500' color={StyleTheme.colorpalette.white02} fheight='24px'>
                        {props.objectData.titlejob} <SpanTypography ffamily={StyleTheme.font.roboto} fsize={isMobile ? '14px' : '18px'} fweight='400' color={StyleTheme.colorpalette.green04} fheight='24px'>
                            @ {props.objectData.locationfull}
                        </SpanTypography>
                    </Typography>
                </Container>
                <Container padding='0 0 28px 0'>
                    <Typography ffamily={StyleTheme.font.firacode} fsize={isMobile ? '12px' : '14px'} fweight='500' color={StyleTheme.colorpalette.white01}>
                        {props.objectData.timeperiod}
                    </Typography>
                </Container>
                <Container display='flex' flexdirection='column'>
                    {
                        props.objectData.jobdesc.map((item, index) => (
                            <ListItemIcon
                                key={index}
                                data={item}
                                iconColumnSize='10%'
                                iconTextSize='90%'
                                iconColor={StyleTheme.colorpalette.green04}
                                iconSize={isMobile || isTablet ? 16 : 18}
                                strokeSize={isMobile || isTablet ? 1.5 : 2}
                                textFont={StyleTheme.font.roboto}
                                textSize={isMobile || isTablet ? '13px' : '1rem'}
                                textWeight='400'
                                textHeight='24px'
                                textColor={StyleTheme.colorpalette.white01}
                            />
                        ))
                    }
                </Container>
            </Container>
        </>
    )
}
