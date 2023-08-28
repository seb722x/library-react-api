import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loader from './Loader';

test('renders loader with image', () => {
  const { getByAltText } = render(<Loader />);
  
  // Test for the presence of the loader image
  const loaderImage = getByAltText('loader');
  expect(loaderImage).toBeInTheDocument();
});