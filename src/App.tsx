/**
 * @file App.tsx
 * @description Main entry point for the application component.
 * @author Ilia Kamilov <iliakmlv@gmail.com>
 * @date 08/09/2024
 * @license MIT
 * @version 1.0.0
 */

import { Container, Typography } from '@mui/material';
import React from 'react';

const App: React.FC = () => {
    return (
        <Container
            maxWidth="lg"
        >
            <Typography variant='h6' component="h1">ברוכים הבאים!</Typography>
        </Container>
    );
}

export default App;