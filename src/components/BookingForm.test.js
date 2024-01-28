import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the "Choose date" label in BookingForm', () => {
    render(<BookingForm />);
    const chooseDateLabel = screen.getByText("Choose date");
    expect(chooseDateLabel).toBeInTheDocument();
});
