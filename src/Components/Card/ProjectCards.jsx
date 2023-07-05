import React from 'react'
import styled from 'styled-components'

import { Container } from '../../Components/Container/Container.styled'
import { Typography } from '../../Components/Typography/Typography.styled'
import { StyleTheme } from '../../Helpers/StyleVariables'
import { handleReferralLink } from '../../Helpers/UtilFunctions'

import { Folder, GitHub, ExternalLink } from 'react-feather'

const TitleCard = styled(Typography)``

const CardBox = styled(Container)`
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    position: relative;
    bottom: 0px;
    cursor: pointer;
    transition: bottom 0.2s linear;

    &:hover{
        position: relative;
        bottom: 5px;
    }

    &:hover ${TitleCard} {
        color : ${({ theme }) => theme.colorpalette.green04};
    }

`

const GithubIcon = styled(GitHub)`
    color : ${({ theme }) => theme.colorpalette.white01};
    font-size: 2px;
    cursor: pointer;

    &:hover{
        color : ${({ theme }) => theme.colorpalette.green04};
    }

`

const LinkIcon = styled(ExternalLink)`
    color : ${({ theme }) => theme.colorpalette.white01};
    font-size: 8px;
    cursor: pointer;

    &:hover{
        color : ${({ theme }) => theme.colorpalette.green04};
    }

`


export default function ProjectCards(props) {

    const mainExternalLink = (data) => {
        let findDataSite = data.find(item => item.platform === 'site')
        let dataLink = findDataSite !== undefined ? findDataSite.link : data[0].link
        handleReferralLink('outerlink', dataLink)
    }

    return (
        <>
            <CardBox display='flex' flexwrap='wrap' padding='26px' bgcolor={StyleTheme.colorpalette.blue07} bradius='6px' onClick={() => mainExternalLink(props.data.linkreferral)}>
                <Container flex='60%'>
                    <Folder color={StyleTheme.colorpalette.green04} size={34} strokeWidth={1.5} />
                </Container>
                <Container flex='40%'>
                    <Container display='flex' gap='12px' justify='flex-end' padding='4px 0 0 0'>
                        {
                            props.data.linkreferral.map((item, index) => (
                                item.platform === 'github' ? <GithubIcon key={index} onClick={() => handleReferralLink('outerlink', item.link)} /> : <LinkIcon key={index} onClick={() => handleReferralLink('outerlink', item.link)} />
                            ))
                        }
                    </Container>
                </Container>
                <Container flex='100%' padding='24px 0 20px 0'>
                    <TitleCard ffamily={StyleTheme.font.roboto} fsize='20px' fweight='500' color={StyleTheme.colorpalette.white02}>{props.data.title}</TitleCard>
                </Container>
                <Container flex='100%'>
                    <Typography ffamily={StyleTheme.font.roboto} fsize='14px' fweight='500' fheight='24px' color={StyleTheme.colorpalette.white01}>{props.data.description}</Typography>
                </Container>
                <Container flex='100%'>
                    <Container display='flex' gap='10px' padding='24px 0 10px 0'>
                        {
                            props.data.technology.map((item, index) => (
                                <Typography key={index} ffamily={StyleTheme.font.firacode} fsize='14px' fweight='100' fheight='24px' color={StyleTheme.colorpalette.white01}>{item}</Typography>
                            ))
                        }
                    </Container>
                </Container>
            </CardBox>
        </>
    )
}
