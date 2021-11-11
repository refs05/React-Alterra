import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
 
import FormCoding from './FormCoding';
 
describe('FormPage', () => {
  test('renders Form component', () => {
    render(<FormCoding />);
    expect(screen.getByText(/Nama Lengkap:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
  });

  test('input text for name and email with false value', () => {
    render(<FormCoding />);
    
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: 'Restu44' },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: 'the phreakers' },
    });
    
    expect(screen.getByText('Nama Lengkap Harus Berupa Huruf')).toBeInTheDocument();
    expect(screen.getByText('Email Tidak Sesuai')).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama/)).toHaveValue('Restu44');
    expect(screen.getByLabelText(/Email/)).toHaveValue('the phreakers');
  });

  test('input text for ideal value', () => {
    render(<FormCoding />);
    
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: 'zyro' },
    });
    
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: 'zyro@mail.com' },
    });
    
    expect(screen.getByLabelText(/Nama/)).toHaveValue('zyro');
    expect(screen.getByLabelText(/Email/)).toHaveValue('zyro@mail.com');
  });

  test('submit button with error', () => {
    render(<FormCoding />);
    
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: 'zyro' },
    });
    
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: 'emailmail.com' },
    });
    
    fireEvent.submit(screen.getByText("Submit"))
    
    expect(window.alert).toBeCalledWith("Data Pendaftar Tidak Sesuai");
    expect(screen.getByLabelText(/Nama/)).toHaveValue('zyro');
    expect(screen.getByLabelText(/Email/)).toHaveValue('emailmail.com');
  });

  test('submit button with ideal value', () => {
    render(<FormCoding />);
    
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: 'zyro' },
    });
    
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: 'zyro@mail.com' },
    });
    
    fireEvent.input(screen.getByPlaceholderText('Nomor', { name: /noHandphone/i }), {
      target: { value: 1324567898 },
    });
    
    fireEvent.submit(screen.getByText("Submit"))
    
    expect(window.alert).toBeCalledWith(`Data Pendaftar "zyro" Berhasil Diterima`);
    expect(screen.getByLabelText(/Nama/)).toHaveValue('zyro');
    expect(screen.getByLabelText(/Email/)).toHaveValue('zyro@mail.com');
    expect(screen.getByLabelText(/No Handphone/)).toHaveValue('1324567898');
  });
});