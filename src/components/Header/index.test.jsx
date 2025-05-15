import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";

import View from "./view.jsx";

describe('Header', () => {
    it("render with the name", () => {
        render(
            <MemoryRouter>
                <View name={'Tom'} />
            </MemoryRouter>
        );
        expect(screen.getAllByText(new RegExp('Coucou Tom', 'i')).length).toBe(1);
    });
});