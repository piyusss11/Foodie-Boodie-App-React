import Contact from "../../pages/Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact pages tests", () => {
    //describe is used to group tests in batches
  it("should render my contact heading", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  it("should render my contact button ", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });
  // can use it or test both are the same
  it("should render my contact input boxes ", () => {
    render(<Contact />);
    const inputbBoxes = screen.getAllByRole("textbox");
    console.log(inputbBoxes.length); 

    expect(inputbBoxes.length).toBe(3);
  });
});
