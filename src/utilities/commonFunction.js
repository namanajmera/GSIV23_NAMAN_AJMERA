export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const convertMinutesToHHMM = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = remainingMinutes.toString().padStart(2, "0");
  return `${formattedHours}h : ${formattedMinutes}m`;
};

export const formatToTwoDecimalPlaces = (number) => {
  if (typeof number !== "number") {
    throw new Error("Input must be a number");
  }
  return parseFloat(number.toFixed(1));
};

export const extractYearFromDate = (dateString) => {
  // Split the date string by '-' to get an array of parts
  const dateParts = dateString.split("-");

  // Extract the year part (assuming the year is the first part)
  const year = parseInt(dateParts[0], 10);

  // Return the year as a number
  return year;
};
