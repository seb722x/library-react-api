import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom/extend-expect';


test('renders footer with correct content', () => {
  const { getByText, getAllByRole } = render(<Footer />);
  
  // Test for the presence of certain headings
  expect(getByText('Nuestras tiendas')).toBeInTheDocument();
  expect(getByText('Dirigete a:')).toBeInTheDocument();
  expect(getByText('Acerca de:')).toBeInTheDocument();
  expect(getByText('Contactenos:')).toBeInTheDocument();

  // Test for the presence of store locations
  const storeLocations = getAllByRole('link', { name: /Medellín|Bogotá|Cali/i });
  expect(storeLocations).toHaveLength(3);

  // Test for the presence of navigation links
  const navigationLinks = getAllByRole('link', { name: /Home|lista de libros|sesión/i });
  expect(navigationLinks).toHaveLength(3);

  // Test for the presence of contact information
  const contactInfo = getAllByRole('link', { name: /300 454 36 92|604 488 66 00|servicios@bookstore.com/i });
  expect(contactInfo).toHaveLength(3);
});