
import { ToDoWallList } from './ToDoWallList'
import * as ReactDOM from 'react-dom'
import React from 'react'
import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
  render(<ToDoWallList todos={[]} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
