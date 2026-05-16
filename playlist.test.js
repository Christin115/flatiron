
const { calculatePlaylistDuration } = require('./playlist'); // Import the function

test('calculates total duration of a playlist (in minutes)', () => {
  const playlist = [
    { duration: 200 }, // Song 1 (3 minutes, 20 seconds)
    { duration: 180 }, // Song 2 (3 minutes)
  ];

  const totalDuration = calculatePlaylistDuration(playlist);

  // Here's the assertion using Jest's expect function
  expect(totalDuration).toBe(6); // Expected total duration: 6 minutes
});