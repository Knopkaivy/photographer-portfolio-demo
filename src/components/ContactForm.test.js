import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

describe('ContactForm input elements are on the page', () => {
  test('ContactForm has 3 text boxes', () => {
    render(<ContactForm />);
    const textInputs = screen.getAllByRole('textbox');
    expect(textInputs).toHaveLength(3);
  });

  test('ContactForm has button Submit', () => {
    render(<ContactForm />);
    const btn = screen.getByRole('button');
    expect(btn).toBeEnabled();
  });
});

describe('ContactForm name and email inputs are required fields', () => {
  test('name input is a required field', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/^Name/i)).toHaveAttribute('required');
  });
  test('email input is a required field', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/^Email/i)).toHaveAttribute('required');
  });
});

describe('ContactForm data entry capability', () => {
  test('name input is defined in ContactForm', () => {
    render(<ContactForm />);
    const nameInput = screen.getByLabelText(/^Name/i);
    expect(nameInput).toBeDefined();
  });
  test('user is able to enter name in ContactForm', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    const nameInput = screen.getByLabelText(/^Name/i);
    expect(nameInput).toBeInTheDocument();
    await user.click(nameInput);
    await user.keyboard('Jane');
    expect(nameInput.value).toBe('Jane');
  });
  test('user is able to enter email in ContactForm', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    const emailInput = screen.getByLabelText(/^Email/i);
    expect(emailInput).toBeInTheDocument();
    await user.click(emailInput);
    await user.keyboard('jane@jane.com');
    expect(emailInput.value).toBe('jane@jane.com');
  });
  test('user is able to enter message in ContactForm', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    const messageInput = screen.getByLabelText(/^Message/i);
    expect(messageInput).toBeInTheDocument();
    await user.click(messageInput);
    await user.keyboard('Test message');
    expect(messageInput.value).toBe('Test message');
  });
});

describe('ContactForm validations', () => {
  test('form submit not working without name entry', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.click(screen.getByRole('button'));
    expect(screen.queryByText(/^Thank you/i)).not.toBeInTheDocument();
  });
  test('form submit not working without email entry', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.click(screen.getByLabelText(/^Name/i));
    await user.keyboard('Jane');
    await user.click(screen.getByRole('button'));
    expect(screen.queryByText(/^Thank you/i)).not.toBeInTheDocument();
  });
  test('form submit not working with mismatching email entry', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.click(screen.getByLabelText(/^Name/i));
    await user.keyboard('Jane');
    await user.click(screen.getByLabelText(/^Email/i));
    await user.keyboard('jane@jane');
    await user.click(screen.getByRole('button'));
    expect(screen.queryByText(/^Thank you/i)).not.toBeInTheDocument();
  });
  test('form submit is working without message entry', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.click(screen.getByLabelText(/^Name/i));
    await user.keyboard('Jane');
    await user.click(screen.getByLabelText(/^Email/i));
    await user.keyboard('jane@jane.com');
    await user.click(screen.getByRole('button'));
    expect(screen.queryByText(/^Thank you/i)).not.toBeInTheDocument();
  });
  test('form can be submitted with matching input values', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.click(screen.getByLabelText(/^Name/i));
    await user.keyboard('Jane');
    await user.click(screen.getByLabelText(/^Email/i));
    await user.keyboard('jane@jane.com');
    await user.click(screen.getByLabelText(/^Message/i));
    await user.keyboard('Test message');
    await user.click(screen.getByRole('button'));
    const confirmation = await screen.findByText(/^Thank you/i);
    expect(confirmation).toBeInTheDocument();
  });
});
