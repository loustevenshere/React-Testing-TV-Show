import React from 'react'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/react';
import App from './App';
import { fetchShow } from './api/fetchShow';

jest.mock("./api/fetchShow");

const 
test('Component renders', () => {
    render(<App />);
    fetchShowMock.mockReturnValueOnce(seasonData);
    expect(screen.queryByText(/stranger things/i)).not.toBeInTheDocument
});

test("renders episodes when the API call returns", async ()=> {
    render(<App />);
    // API call as started and will return data after some period of time
    // wait for the data to come back then test for the header component
    // Mocking api call using seasonData
    fetchShowMock.mockReturnValueOnce(seasonData);
    userEvent.click(await screen.findByText(/select a season/i));
    userEvent.click(screen.getByText(/season 1/i))

    expect(await screen.findAllByText(/episode/i)).toHaveLength(8);

})