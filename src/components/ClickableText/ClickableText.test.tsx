import {describe, it, expect, vi} from "vitest";
import {render, screen, fireEvent} from "@testing-library/react";
import ClickableText from "./ClickableText";

describe("Clickable text component", () => {
    it("should render the text", () => {

        render(<ClickableText label={"This is clickable"}/>)

        expect(screen.queryByText("This is clickable")).toBeInTheDocument();
    });

    it("should call onClick when clicked", () => {
        const handleClick = vi.fn();

        render(<ClickableText label="Click me" onClickHandler={handleClick} />)

        fireEvent.click(screen.getByText("Click me"))

        expect(handleClick).toHaveBeenCalled();
    });
});