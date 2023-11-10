import '@testing-library/jest-dom'
import React from 'react';
import { render, screen } from '@testing-library/react';
import Taskbar from "@/app/components/Systems/shared/Taskbar";


describe('Taskbar component to be in the document', () => {
    it('Render TaskBar', () => {
        render(<Taskbar children={<div></div>}/>);
        const taskbar = screen.getByTestId('taskbar');
        expect(taskbar).toBeInTheDocument();
    });
});
