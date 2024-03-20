import { render, screen } from "@testing-library/react";
import Navigation from ".";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);
  const playElement = screen.getByText(/play/i);
  const historyElement = screen.getByText(/history/i);
  expect(playElement).toBeInTheDocument();
  expect(historyElement).toBeInTheDocument();
});
