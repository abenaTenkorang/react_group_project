import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import '@testing-library/jest-dom';

describe('Navbar component', () => {
  test('renders correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('navigates to the correct page on click', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    fireEvent.click(getByText('Rockets'));
    expect(window.location.pathname).toBe('/Rockets');
  });

  test("applies 'active' class to the active link", () => {
    const { getByText } = render(
      <BrowserRouter initialEntries={['/Rockets']}>
        <Navbar />
      </BrowserRouter>,
    );
    const rocketsLink = getByText('Rockets');
    const missionsLink = getByText('Missions');
    const myProfileLink = getByText('MyProfile');

    expect(rocketsLink).toHaveClass('active');
    expect(missionsLink).not.toHaveClass('active');
    expect(myProfileLink).not.toHaveClass('active');

    fireEvent.click(missionsLink);

    expect(rocketsLink).not.toHaveClass('active');
    expect(missionsLink).toHaveClass('active');
    expect(myProfileLink).not.toHaveClass('active');
  });
});
