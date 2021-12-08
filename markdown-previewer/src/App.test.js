import App from "./App";
import { render, screen } from '@testing-library/react';

describe('demo test', () => {
    test('renders title', () => {
        render(<App />)
        const titleElement = screen.getByText(/Previewer/i);
        expect(titleElement).toBeInTheDocument();
    })
})