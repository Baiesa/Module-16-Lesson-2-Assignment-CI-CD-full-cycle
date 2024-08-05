import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CommentForm from './CommentForm';

describe('CommentForm', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders correctly', () => {
    const { getByLabelText } = render(<CommentForm />);
    expect(getByLabelText(/title/i)).toBeInTheDocument();
    expect(getByLabelText(/body/i)).toBeInTheDocument();
  });

  it('handles input changes', () => {
    const { getByLabelText } = render(<CommentForm />);
    const titleInput = getByLabelText(/title/i);
    const bodyInput = getByLabelText(/body/i);

    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    fireEvent.change(bodyInput, { target: { value: 'Test Body' } });

    expect(titleInput.value).toBe('Test Title');
    expect(bodyInput.value).toBe('Test Body');
  });

  it('submits the form and stores comment in localStorage', () => {
    const { getByLabelText, getByText } = render(<CommentForm />);
    const titleInput = getByLabelText(/title/i);
    const bodyInput = getByLabelText(/body/i);
    const submitButton = getByText(/post comment/i);

    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    fireEvent.change(bodyInput, { target: { value: 'Test Body' } });

    fireEvent.click(submitButton);

    const comments = JSON.parse(localStorage.getItem('comments'));
    expect(comments).toEqual([{ title: 'Test Title', body: 'Test Body' }]);
  });
});