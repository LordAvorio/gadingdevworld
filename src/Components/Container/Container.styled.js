import styled from 'styled-components'

export const Container = styled.div`
    max-width: ${({ width }) => width || '100%' };
    height: ${({ height }) => height || '' };
    padding: ${({ padding }) => padding || '0'};
    margin: ${({ margin }) => margin || '0'};
    display: ${({ display }) => display || 'block'};
    flex-direction: ${({ flexdirection }) => flexdirection || ''};
    flex: ${({ flex }) => flex || ''};
    flex-wrap: ${({ flexwrap }) => flexwrap || ''};;
    gap: ${({ gap }) => gap || ''};
    background-color: ${({ bgcolor }) => bgcolor || ''};
    border-radius: ${({ bradius }) => bradius || ''};
    justify-content: ${({ justify }) => justify || ''};
    align-items: ${({ allign }) => allign || ''};
    grid-template-columns: ${({ gridtemplatecolumn }) => gridtemplatecolumn || ''};
    grid-template-rows: ${({ gridtemplaterows }) => gridtemplaterows || ''};
    grid-row: ${({ gridrow }) => gridrow || ''};
    grid-column: ${({ gridcolumn }) => gridcolumn || ''};
    z-index: ${({ zindex }) => zindex || ''};
    position: ${({ position }) => position || ''};
`

export const ShowOnlyMobileTablet = styled.div`

    display: none;

    @media (max-width: ${({ theme }) => theme.display.tablet}){
        display: inline;
    }

`

export const ShowOnlyDesktop = styled.div`
    display: inline;

    @media (max-width: ${({ theme }) => theme.display.tablet}){
        display: none;
    }

`