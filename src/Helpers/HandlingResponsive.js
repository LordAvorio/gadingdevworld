import { useMediaQuery } from 'react-responsive'
import { StyleTheme } from '../Helpers/StyleVariables'


export const isMobile = () => {
    const mobile = useMediaQuery({ query: `(max-width: ${StyleTheme.resolution.mobile})` });
    return mobile
}

export const isTablet = () => {
    return useMediaQuery({ query: `(max-width: ${StyleTheme.resolution.tablet})` });
}

export const isLaptop = () => {
    return useMediaQuery({ query: `(max-width: ${StyleTheme.resolution.laptop})` });
}

export const isDesktop = () => {
    return useMediaQuery({ query: `(max-width: ${StyleTheme.resolution.desktop})` });
}