import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginComponent from './LoginComponent';

describe('LoginComponent', () => {
  test('renders login form by default', () => {
    const { getByText, getByPlaceholderText } = render(<LoginComponent show={true} onClose={() => {}} />);
    
    // Test for the presence of login form elements
    expect(getByText('Login')).toBeInTheDocument();
    expect(getByPlaceholderText('Username')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
  });

  test('renders register form when register button is clicked', () => {
    const { getByText, getByPlaceholderText } = render(<LoginComponent show={true} onClose={() => {}} />);
    
    const registerButton = getByText('Register');
    fireEvent.click(registerButton);

    // Test for the presence of register form elements
    expect(getByText('Register')).toBeInTheDocument();
    expect(getByPlaceholderText('Name')).toBeInTheDocument();
    expect(getByPlaceholderText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
  });

  // You can add more tests for different interactions and behaviors here
});