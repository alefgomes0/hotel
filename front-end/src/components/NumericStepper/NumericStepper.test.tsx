import "@testing-library/jest-dom";
import { render, screen } from "../../test-utils";
import { describe, expect, it, vi } from "vitest";
import user from "@testing-library/user-event";
import { NumericStepper } from "./NumericStepper";
import * as useGuestInfoModule from "../../hooks/useGuestInfo";

describe("Numeric stepper", () => {
  it("renders correctly", () => {
    render(<NumericStepper field="adult" />);

    const minusButton = screen.getByRole("button", { name: "-" });
    const plusButton = screen.getByRole("button", { name: "+" });

    expect(minusButton).toBeInTheDocument();
    expect(plusButton).toBeInTheDocument();
  }),
  it("invoke its functions when clicked", async () => {
    user.setup();
  
    // Mock the useGuestInfo hook
    const mockUseGuestInfo = vi.spyOn(useGuestInfoModule, "useGuestInfo");
    const mockDecreaseQuantity = vi.fn();
    const mockIncreaseQuantity = vi.fn();
    mockUseGuestInfo.mockReturnValue({
      searchInfo: {}, 
      getFieldValue: () => 0,
      decreaseQuantity: mockDecreaseQuantity,
      increaseQuantity: mockIncreaseQuantity
    });
  
    render(<NumericStepper field="adult" />);  

    const minusButton = screen.getByRole("button", { name: "-" });
    const plusButton = screen.getByRole("button", { name: "+" });
    await user.click(minusButton);
    await user.click(plusButton);

    expect(mockDecreaseQuantity).toHaveBeenCalled();
    expect(mockIncreaseQuantity).toHaveBeenCalled();
    mockUseGuestInfo.mockRestore();
  });
});
