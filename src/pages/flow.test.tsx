import { Button } from "@/shared/ui";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
describe("Button-компонент", () => {
  it("renders correctly", () => {
    render(<Button>Нажми на меня</Button>);
    expect(screen.getByText("Нажми на меня")).toBeDefined();
  });
});
