import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {
  it("renders email and password fields", () => {
    const { getByLabelText } = render(<Login />);
    const emailInput = getByLabelText("Your Email");
    const passwordInput = getByLabelText("Password");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("submits the form with user input", async () => {
    const mockUser = {
      email: "test@example.com",
      password: "password123",
    };

    const fetchMock = jest.fn(() => Promise.resolve({ ok: true }));
    global.fetch = fetchMock;

    const { getByLabelText, getByText } = render(<Login />);
    const emailInput = getByLabelText("Your Email");
    const passwordInput = getByLabelText("Password");
    const loginButton = getByText("Login");

    fireEvent.change(emailInput, { target: { value: mockUser.email } });
    fireEvent.change(passwordInput, { target: { value: mockUser.password } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(expect.any(String), {
        method: "POST",
        body: JSON.stringify({
          email: mockUser.email,
          password: mockUser.password,
          returnSecureToken: true,
        }),
      });
      expect(window.alert).toHaveBeenCalledWith("Login SuccessFull !");
    });
  });

  it("displays error message if login fails", async () => {
    const errorMessage = "Invalid credentials";

    const fetchMock = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ error: { message: errorMessage } }),
      })
    );
    global.fetch = fetchMock;

    const { getByLabelText, getByText } = render(<Login />);
    const emailInput = getByLabelText("Your Email");
    const passwordInput = getByLabelText("Password");
    const loginButton = getByText("Login");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "invalidpassword" } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(errorMessage);
    });
  });
});
