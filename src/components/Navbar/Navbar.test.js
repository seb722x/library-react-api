import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';

test('renders navbar with brand and menu', () => {
  const { getByText } = render(
    <Router>
      <Navbar />
    </Router>
  );
  
  // Test for the presence of brand text
  expect(getByText('Open_Library')).toBeInTheDocument();

  // Test for the presence of menu icon
  const menuIcon = getByTestId('menu-icon');
  expect(menuIcon).toBeInTheDocument();
});

test('displays login component when login button is clicked', () => {
  const { getByText, queryByText } = render(
    <Router>
      <Navbar />
    </Router>
  );

  const loginButton = getByText('Login');
  fireEvent.click(loginButton);

  // Test for the presence of login component
  const loginComponent = getByText('Login');
  expect(loginComponent).toBeInTheDocument();

  // Close the login component
  fireEvent.click(loginButton);
  
  // Test that the login component is no longer in the document
  const closedLoginComponent = queryByText('Login');
  expect(closedLoginComponent).toBeNull();
});





