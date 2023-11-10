import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent, getByTestId, screen } from '@testing-library/react';
// import { screen } from '@testing-library/jest-dom'
import Start from '@/app/components/Systems/Windows/WindowsTaskbar/Start';

// Mock the SystemContext


describe('Start Component', () => {
    it('Render Start button', () => {
        const { getByTestId } = render(<Start />);
        // const startButton = getByTestId('start-button');
        const submitButton = screen.getByTestId('start-button');
        expect(submitButton).toBeInTheDocument();
    });
});
