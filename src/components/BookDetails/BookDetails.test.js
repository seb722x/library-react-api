import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import BookDetails from './BookDetails';

test('renders book details with loading spinner', () => {
  const { getByTestId } = render(
    <MemoryRouter initialEntries={['/book/123']}>
      <Route path="/book/:id">
        <BookDetails />
      </Route>
    </MemoryRouter>
  );
  
  // Test for the presence of loading spinner
  const loadingSpinner = getByTestId('loading-spinner');
  expect(loadingSpinner).toBeInTheDocument();
});

test('renders book details after loading', async () => {
  // Mock your book details data here
  const mockBook = {
    id: '123',
    title: 'Sample Title',
    description: 'Sample Description',
    cover_img: 'sample_cover.jpg',
    subject_places: 'Sample Places',
    subject_times: 'Sample Times',
    subjects: 'Sample Subjects',
  };

  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockBook),
    })
  );

  const { getByText, getByAltText } = render(
    <MemoryRouter initialEntries={['/book/123']}>
      <Route path="/book/:id">
        <BookDetails />
      </Route>
    </MemoryRouter>
  );

  await waitFor(() => {
    // Test for the presence of book details content
    const titleElement = getByText('Sample Title');
    const descriptionElement = getByText('Sample Description');
    const placesElement = getByText('Sample Places');
    const timesElement = getByText('Sample Times');
    const subjectsElement = getByText('Sample Subjects');
    const coverImgElement = getByAltText('cover img');

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(placesElement).toBeInTheDocument();
    expect(timesElement).toBeInTheDocument();
    expect(subjectsElement).toBeInTheDocument();
    expect(coverImgElement).toBeInTheDocument();
  });

  global.fetch.mockRestore();
});