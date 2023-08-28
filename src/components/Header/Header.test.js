import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

test('renders header with correct content', () => {
  const { getByText } = render(<Header />);
  
  // Test for the presence of certain elements and content
  expect(getByText('Encuentra el libro que quieras')).toBeInTheDocument();
  expect(getByText('Este es un espacio para que encuentres historias reales, mágicas, graciosas o hasta cientificas. Sientete libre de buscar y poder seleccionar algo que te llene durante horas, días o meses.')).toBeInTheDocument();
});