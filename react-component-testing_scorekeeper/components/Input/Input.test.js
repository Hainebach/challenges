import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(<Input placeholder={""} name={""} required type="text" />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toHaveAttribute("placeholder");
  expect(inputElement).toHaveAttribute("name");
  expect(inputElement).toHaveAttribute("required");
  expect(inputElement).toHaveAttribute("type", "text");
});

test("calls callback on every user input", async () => {});
