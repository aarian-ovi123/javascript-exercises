/*
  Function: convertHeightToMeters
  -------------------------------
    This function changes a person's height from feet and inches
    into meters, then shows the result.
    
  Conversion factors:
    - 1 foot = 12 inches
    - 1 inch = 2.54 centimeters
    - 100 centimeters = 1 meter

  Example:
    convertHeightToMeters(6, 4);
    // prints: 6 feet, 4 inches = 1.9304 meters
*/

// Conversion constants:
const INCHES_TO_CM = 2.54;      // There are 2.54 centimeters in 1 inch.
const CM_TO_METERS = 0.01;      // There are 100 centimeters in 1 meter.
const FEET_TO_INCHES = 12;      // There are 12 inches in 1 foot.

function convertHeightToMeters(feet, inches){
	// Step 1: Convert total height to inches.
    let totalInches = (feet * FEET_TO_INCHES) + inches;

    // Step 2: Convert inches to centimeters.
    let totalCentimeters = totalInches * INCHES_TO_CM;

    // Step 3: Convert centimeters to meters.
    let totalMeters = totalCentimeters * CM_TO_METERS;

    // Step 4: Print the result, rounded to 4 decimal places.
    console.log(feet + " feet, " + inches + " inches = " + totalMeters.toFixed(4) + " meters");
}

// Test the function with different values.
// These calls test heights with various feet and inch combinations.
convertHeightToMeters(6, 4);   // Expected: 1.9304 meters
convertHeightToMeters(0, 6);   // Expected: 0.1524 meters
convertHeightToMeters(5, 8);   // Expected: 1.7272 meters
convertHeightToMeters(5, 2);   // Expected: 1.5748 meters
convertHeightToMeters(10, 3);  // Expected: 3.1242 meters
convertHeightToMeters(10, 0);  // Expected: 3.0480 meters
