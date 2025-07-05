// src/Components/timesReducer.test.js
import { initializeTimes, updateTimes } from './BookingForm';

// Mock fetchAPI globally before tests
const mockFetchAPI = (date) => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

describe('Time management functions', () => {
  beforeAll(() => {
    window.fetchAPI = mockFetchAPI;
  });

  afterAll(() => {
    delete window.fetchAPI;
  });

  test('initializeTimes returns correct initial times from API', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
  });

  test('updateTimes returns times for selected date from API', () => {
    const mockState = []; 
    const mockAction = { 
      type: 'UPDATE_TIMES',
      date: '2023-05-20' 
    };
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    const result = updateTimes(mockState, mockAction);
    expect(result).toEqual(expectedTimes);
  });

  test('updateTimes returns current state for unknown action type', () => {
    const mockState = ['17:00', '18:00'];
    const mockAction = { type: 'UNKNOWN_ACTION' };
    const result = updateTimes(mockState, mockAction);
    expect(result).toEqual(mockState);
  });
});
