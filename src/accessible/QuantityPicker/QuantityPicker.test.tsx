import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import QuantityPicker from "./QuantityPicker";

describe("QuantityPicker", () => {
  test("Increments quantity", () => {
    const Wrapper = () => {
      const [quantity, setQuantity] = useState(1);
      return (
        <QuantityPicker
          error=""
          errorCheck={() => {}}
          itemName="Item"
          maxQuantity={10}
          minQuantity={0}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      );
    };
    render(<Wrapper />);
    const incrementButton = screen.getByLabelText("Increment quantity of Item");
    expect(incrementButton).toBeInTheDocument();
    fireEvent.click(incrementButton);
    const input = screen.getByRole("spinbutton");
    expect(input.getAttribute("value")).toBe("2");
  });
});
