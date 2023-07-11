import React from 'react'


import { Container } from '../../../Components/Container/Container.styled'
import { Typography } from '../../../Components/Typography/Typography.styled'
import { StyleTheme } from '../../../Helpers/StyleVariables'

import IconButton from '../../../Components/Button/IconButton/IconButton'

import { handleReferralLink } from '../../../Helpers/UtilFunctions'

import { useMediaQuery } from 'react-responsive'

import { motion } from 'framer-motion'
import { dissolveEffect01 } from '../../../Helpers/VariantsAnimation'

export default function Contacts({ innerRef }) {

    const isMobile = useMediaQuery({ query: `(max-width: ${StyleTheme.resolution.mobile})` });

    return (
        <>
            <Container ref={innerRef} display='flex' flexdirection='column' margin={isMobile ? '0 0 120px 0' : '0 20% 200px 20%'}>
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    variants={dissolveEffect01}
                >
                    <Typography ffamily={StyleTheme.font.firacode} fsize={isMobile ? '14px' : '16px'} color={StyleTheme.colorpalette.green04} align='center' padding='0 0 12px 0'>
                        04. What&apos;s Next?
                    </Typography>
                    <Typography ffamily={StyleTheme.font.roboto} fweight='600' fsize={isMobile ? '36px' : '58px'} color={StyleTheme.colorpalette.white02} align='center' padding='0 0 16px 0'>
                        Get In Touch
                    </Typography>
                    <Typography ffamily={StyleTheme.font.roboto} fweight='400' fheight='28px' fsize={isMobile ? '16px' : '18px'} color={StyleTheme.colorpalette.white01} align='center' padding={isMobile ? '0 0 40px 0' : '0 0 60px 0'}>
                        Currently, I am looking for opportunities as software engineer. My inbox is always open, so if you have any questions or maybe just wanna send greeting message, I will try my best to get back to you.
                    </Typography>
                    <Container display='flex' justify='center'>
                        <IconButton padding='16px 20px' paddingtext='2px 0 0 0' iconflex='10%' infoflex='85%' icon='mail' textinfo='Say Hello' iconstroke={1.5} iconsize={24} onClick={() => handleReferralLink('email')} />
                    </Container>
                </motion.div>
            </Container>
        </>
    )
}
