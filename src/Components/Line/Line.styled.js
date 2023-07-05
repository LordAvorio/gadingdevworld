import styled from 'styled-components'

export const LineComponent = styled.hr`
    max-width: ${({ width }) => width || '100%' };
    background-color: ${({ color }) => color || ''};
    margin: ${({ margin }) => margin || '0'};
    height: ${({ bwidth }) => bwidth || '1px'};

`