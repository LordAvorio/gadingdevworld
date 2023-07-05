import styled from 'styled-components'

export const ImageType01 = styled.div`
    width: ${({ width }) => width || '100%'};
    padding: ${({ padding }) => padding || '0'};
    margin: ${({ margin }) => margin || '0'};
    display: ${({ display }) => display || 'block'};
    background-image: ${({ path }) => path || ''};
    background-size: ${({ bsize }) => bsize || ''};
    background-position: ${({ bposition }) => bposition || ''};
    background-color: ${({ bcolor }) => bcolor || ''};
    border-radius: ${({ bradius }) => bradius || ''};
    height: ${({ height }) => height || 'auto'};
    background-blend-mode: ${({ bbmode }) => bbmode || ''};
    transition: background-color 0.3s ease-in-out;
    position: relative;

    &:hover{
        background: ${({ bhover }) => bhover || ''};
        background-color: rgba(100,255,218,0);
        background-size: ${({ bsize }) => bsize || ''};
        background-position: ${({ bposition }) => bposition || ''};
    }

    &:after{
        transition: all 0.4s ease-in-out;
        position: absolute;
        content: '';
        top: 14px;
        left: 14px;
        height: ${({ height }) => height || 'auto'};
        width: ${({ width }) => width || '100%'};
        border-radius: ${({ bradius }) => bradius || ''};
        border: 2px solid ${({ theme }) => theme.colorpalette.green04};
        z-index: -1;

    }

    &:hover:after{
            top: 20px;
            left: 20px;
    }

`