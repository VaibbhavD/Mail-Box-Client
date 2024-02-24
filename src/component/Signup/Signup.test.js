import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Signup from "./SignUp";
import React from "react";

test("Submitting form with valid email, password, and re-entered password should trigger SignUpHandler", () => {
  render(<Signup />);

  const initial = screen.getByText("Sign up");
  expect(initial).toBeInTheDocument();
});

test("renders Signup component", () => {
  render(<Signup />);
  const emailInput = screen.getByLabelText("Your Email");
  const passwordInput = screen.getByLabelText("Password");
  const rePasswordInput = screen.getByLabelText("Repeat your password");
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(rePasswordInput).toBeInTheDocument();
});

test("successful form submission", () => {
  render(<Signup />);
  const emailInput = screen.getByLabelText("Your Email");
  const passwordInput = screen.getByLabelText("Password");
  const rePasswordInput = screen.getByLabelText("Repeat your password");
  const registerButton = screen.getByRole("button", { name: "Register" });

  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "password123" } });
  fireEvent.change(rePasswordInput, { target: { value: "password123" } });

  fireEvent.click(registerButton);
});
test("display alert on password mismatch", () => {
  render(<Signup />);
  const emailInput = screen.getByLabelText("Your Email");
  const passwordInput = screen.getByLabelText("Password");
  const rePasswordInput = screen.getByLabelText("Repeat your password");
  const registerButton = screen.getByRole("button", { name: "Register" });

  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "password123" } });
  fireEvent.change(rePasswordInput, { target: { value: "password456" } });

  fireEvent.click(registerButton);

  expect(screen.getByText("Password Doesn't Match !")).toBeInTheDocument();
});

test("display alert on empty fields", () => {
  render(<Signup />);
  const registerButton = screen.getByRole("button", { name: "Register" });

  fireEvent.click(registerButton);

  expect(screen.getByText("Your Email is required")).toBeInTheDocument();
  expect(screen.getByText("Password is required")).toBeInTheDocument();
  expect(
    screen.getByText("Repeat your password is required")
  ).toBeInTheDocument();
});
