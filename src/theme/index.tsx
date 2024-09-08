/**
 * @file src/theme/index.ts
 * @description Entry point for the theme index.
 * @author Ilia Kamilov <iliakmlv@gmail.com>
 * @date 08/09/2024
 * @license MIT
 * @version 1.0.0
 */
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const theme = createTheme({
    direction: 'rtl', // RTL support
})

const cacheRTL = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin]
})

const Theme: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </CacheProvider>
    )
}

export default Theme;