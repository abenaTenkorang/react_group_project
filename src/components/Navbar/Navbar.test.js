import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  test("renders correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("navigates to the correct page on click", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    fireEvent.click(getByText("Rockets"));
    expect(window.location.pathname).toBe("/Rockets");
  });
});
