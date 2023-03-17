export const log = (...data) => {
  // Check if we are in development mode
  if (
    process.env.NODE_ENV !==
    "development"
  )
    return;
  // eslint-disable-next-line no-console
  console.log("🥑 Advocado:", ...data);
};
export const validateCompanyCode = (
  code
) => {
  // Helper function to check if the code is in a specific range
  const isCodeInRange = (code) =>
    parseInt(code) < 30000000 ||
    parseInt(code) > 60000000;

  // Helper function to calculate the checksum based on the input code and weights
  const getChecksum = (
    code,
    weights
  ) => {
    const codeDigits = code
      .slice(0, -1)
      .split("")
      .map(Number);
    return weights
      .split("")
      .reduce(
        (acc, weight, idx) =>
          acc +
          weight * codeDigits[idx],
        0
      );
  };

  // Determine if the code is in the specified range
  const codeInRange =
    isCodeInRange(code);

  // Set the weights based on the range check result
  const weights1 = codeInRange
    ? "1234567"
    : "7123456";
  const weights2 = codeInRange
    ? "3456789"
    : "9345678";

  // Calculate the remainder with the first set of weights
  const remainder =
    getChecksum(code, weights1) % 11;

  // Choose the weights based on the remainder
  const selectedWeights =
    remainder < 10
      ? weights1
      : weights2;

  // Check if the code is valid by comparing the calculated checksum with the last digit of the code
  const isValid =
    (getChecksum(
      code,
      selectedWeights
    ) %
      11) %
      10 ===
    Number(code.slice(-1));

  return isValid;
};

export const toTitleCase = (string) =>
  string
    .split(" ")
    .map(
      ([first, ...rest]) =>
        `${first.toUpperCase()}${rest
          .join("")
          .toLowerCase()}`
    )
    .join(" ");

export default {
  log,
  validateCompanyCode,
};
