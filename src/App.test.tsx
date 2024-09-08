/**
 * @file App.test.ts
 * @description Tests for the application's main functionality.
 * @author Ilia Kamilov <iliakmlv@gmail.com>
 * @date 08/09/2024
 * @license MIT
*/
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App';

test('renders the main page context.', async () => {
    render(<App />);

    await waitFor(() => {
        expect(screen.getByText(/Main Page/i)).toBeInTheDocument(); // Correct matcher
    });
})