import React from 'react';
import { render } from '@testing-library/react';
import { GlobalProvider } from '../../context'; 
import '@testing-library/jest-dom/extend-expect';
import BookList from './BookList';

test('renders book list with title and book items', () => {
  const books = [
    // Mock your book data here
    // You can create a sample array of books similar to your actual data structure
  ];

  const { getByText, getAllByTestId } = render(
    <GlobalProvider value={{ books, loading: false, resultTitle: 'Results' }}>
      <BookList />
    </GlobalProvider>
  );

  // Test for the presence of section title
  expect(getByText('Results')).toBeInTheDocument();

  // Test for the presence of book items
  const bookItems = getAllByTestId('book-item');
  expect(bookItems.length).toBe(books.length); // Assuming your book data array has the same length as the rendered book items
});








