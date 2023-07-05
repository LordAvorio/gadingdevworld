import styled from 'styled-components'

export const Typography = styled.p`
    padding: ${({ padding }) => padding || '0'};
    margin: ${({ margin }) => margin || '0'};
    color: ${({ color }) => color || 'black'};
    font-family: ${({ ffamily }) => ffamily || ''};
    font-weight: ${({ fweight }) => fweight || 'normal'};
    font-size: ${({ fsize }) => fsize || '12px'};
    cursor: ${({ cursor }) => cursor || 'default'};
    letter-spacing: ${({ fspacing }) => fspacing || ''};
    line-height:  ${({ fheight }) => fheight || ''};
    text-align: ${({ align }) => align || ''};
`

export const SpanTypography = styled.span`
    padding: ${({ padding }) => padding || '0'};
    margin: ${({ margin }) => margin || '0'};
    color: ${({ color }) => color || 'black'};
    font-family: ${({ ffamily }) => ffamily || ''};
    font-weight: ${({ fweight }) => fweight || 'normal'};
    font-size: ${({ fsize }) => fsize || '12px'};
    cursor: ${({ cursor }) => cursor || 'default'};
    letter-spacing: ${({ fspacing }) => fspacing || ''};
    line-height:  ${({ fheight }) => fheight || ''};
    text-align: ${({ align }) => align || ''};
`