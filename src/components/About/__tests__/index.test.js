import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

const categories = [
    { name: "portraits", description: "Portraits of people in my life" },
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

it ("renders", () => {
    render(<Nav ç
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
    />);
});

afterEach(cleanup);

describe("About component", () => {
    // First Test
    it("renders", () => {
        render(<About />);
    });
    // Second Test
    it("matches snapshot DOM node structure", () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
}
)