import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {

    it("counter displays correct initial count", () => {
        const { getByTestId } = render(<Counter initialCount={0}/>)
        const countVal = Number(getByTestId("count").textContent);
        expect(countVal).toBe(0)
    });

    it("count should increment by 1 if the increment button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0}/>)
        const incrementBtn = getByRole("button", { name: "Increment"})
        fireEvent.click(incrementBtn)
        const countVal = Number(getByTestId("count").textContent);
        expect(countVal).toEqual(1)
    })

    it("count should decrement by 1 if the decrement button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0}/>)
        const decrementBtn = getByRole("button", { name: "Decrement"})
        fireEvent.click(decrementBtn)
        const countVal = Number(getByTestId("count").textContent);
        expect(countVal).toEqual(-1)
    })

    it("count should reset to 0 if the restart button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0}/>)
        const restartBtn = getByRole("button", { name: "Restart"})
        fireEvent.click(restartBtn)
        const countVal = Number(getByTestId("count").textContent);
        expect(countVal).toEqual(0)
    })

    it("count should change sign if switch signs button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={20}/>)
        const switchSignsBtn = getByRole("button", { name: "Switch Signs"})
        fireEvent.click(switchSignsBtn)
        const countVal = Number(getByTestId("count").textContent);
        expect(countVal).toEqual(-20)
    })
})