import {describe, it, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import Header from "./Header.tsx";

describe("Header component", () => {
    it("should render the big header", () => {
        render(<Header label={"A big header"} size={"big"}/>)

        expect(screen.queryByText("A big header")).toBeInTheDocument();
    });

    it("should render the small header", () => {
        render(<Header label={"A small header"} size={"small"}/>)

        expect(screen.queryByText("A small header")).toBeInTheDocument();
    });
});