import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Input from "./components/Input";

window.alert = jest.fn();

test("Button is Rendered", () => {
  window.alert.mockClear();

  render(<App />);
  const button = screen.getByText("Enter Size");
  expect(button).toBeInTheDocument();
});

test("Click Features for Button Works", async () => {
  const mockOnClick = jest.fn();
  const mockOnCall = jest.fn();
  window.alert.mockClear();

  render(<Input onClick={mockOnClick} setBoxSize={mockOnCall} />);
  const button = screen.getByText("Enter Size");
  const user = userEvent.setup();
  await user.click(button);
  expect(mockOnClick).toBeCalled();
});
