import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import SearchForm from './SearchForm';

test('renders search form with placeholder and search button', () => {
  const { getByPlaceholderText, getByTestId } = render(
    <Router>
      <SearchForm />
    </Router>
  );
  
  // Test for the presence of search input with placeholder
  const searchInput = getByPlaceholderText('The Lost World ...');
  expect(searchInput).toBeInTheDocument();

  // Test for the presence of search button
  const searchButton = getByTestId('search-button');
  expect(searchButton).toBeInTheDocument();
});

test('handles form submission and navigation correctly', () => {
  const { getByPlaceholderText, getByTestId } = render(
    <Router>
      <SearchForm />
    </Router>
  );

  const searchInput = getByPlaceholderText('The Lost World ...');
  const searchButton = getByTestId('search-button');

  fireEvent.change(searchInput, { target: { value: 'Jurassic Park' } });
  fireEvent.click(searchButton);

  // Test that the search input value has been updated
  expect(searchInput.value).toBe('Jurassic Park');
});
Asegú