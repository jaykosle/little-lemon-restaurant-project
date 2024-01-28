// Import necessary functions from testing library
import { initializeTimes } from './Main'; // Assuming initializeTimes is exported from the Main file

// Unit test for initializeTimes function
test('initializeTimes function returns the initial state for available times', () => {
    // Define the expected initial state
    const expectedInitialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    
    // Call initializeTimes function
    const initialState = initializeTimes();
    
    // Assert that the returned state matches the expected initial state
    expect(initialState).toEqual(expectedInitialState);
});

// Import necessary functions from testing library
import { updateTimes } from './Main'; // Assuming updateTimes is exported from the Main file

// Unit test for updateTimes function
test('updateTimes function returns the same value provided in the state', () => {
    // Define a sample state value
    const sampleState = ['08:00', '09:00', '10:00'];
    
    // Call updateTimes function with the sample state
    const updatedState = updateTimes(sampleState);
    
    // Assert that the returned state matches the sample state
    expect(updatedState).toEqual(sampleState);
});
