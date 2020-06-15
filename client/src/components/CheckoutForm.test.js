import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows


test("form header renders", () => {
const { queryByText } = render(<CheckoutForm />);
const header = queryByText(/form/i);
expect(header).toBeInTheDocument();
});




test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByTestId } = render(<CheckoutForm />)

    const firstname = getByLabelText(/first name/i)
    const lastname = getByLabelText(/last name/i)
    const address = getByLabelText(/address/i)
    const city = getByLabelText(/city/i)
    const state = getByLabelText(/state/i)
    const zipcode = getByLabelText(/zip/i)
    const button = getByTestId(/button/i)

    fireEvent.change(firstname, { target: {value: "Kim"} });
    fireEvent.change(lastname, { target: {value: "Boyd"} });
    fireEvent.change(address, { target: {value: "123 Main Street"} });
    fireEvent.change(city, { target: {value: "Brigantine"} });
    fireEvent.change(state, { target: {value: "New Jersey"} });
    fireEvent.change(zipcode, { target: {value: "08203"} });
    fireEvent.click(button);

    expect(firstname.value).toBe("Kim");
    expect(lastname.value).toBe("Boyd");
    expect(address.value).toBe("123 Main Street");
    expect(city.value).toBe("Brigantine");
    expect(state.value).toBe("New Jersey");
    expect(zipcode.value).toBe("08203");

    // show success message
    const success = getByTestId(/successMessage/i)
    expect(success).toBeInTheDocument();

});
