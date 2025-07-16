import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
    it("renders with the given label", () => {
        render(<Button label="test button" />);
        expect(screen.getByText("test button")).toBeInTheDocument();
    });

    it("calls onClickHandler when clicked", () => {
        const handleClick = vi.fn();
        render(<Button label="click" onClickHandler={handleClick} />);

        fireEvent.click(screen.getByText("click"));
        expect(handleClick).toHaveBeenCalled();
    });

    it("works without onClickHandler", () => {
        render(<Button label="no click handler" />);
        fireEvent.click(screen.getByText("no click handler"));
        expect(screen.getByText("no click handler")).toBeInTheDocument();
    });
});
