import React from 'react'; 
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils'; 

import UserForm from '../components/Users/UserForm'; 

describe('UserForm', () => {
    it('renders the form and submits user data', async () => { 
        
      // Render the UserForm component
      render(<UserForm isOpen={true} onClose={() => {}} />);
  
      // Use act to wrap the code that causes state updates
      await act(async () => {

        // Fill in the form fields
        fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'Ralph Nazombe' } });
        fireEvent.change(screen.getByPlaceholderText('Phone'), { target: { value: '0631837694' } });
        fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'info@iamralph.online' } });
  
        // Submit the form
        fireEvent.click(screen.getByText('Add User'));
      });

    });
  });
