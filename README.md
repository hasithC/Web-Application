# Web Application Mimicking Google Sheets

## Overview
This project replicates the core functionality and user interface of Google Sheets, with a focus on mathematical and data quality functions, data entry, and basic UI interactions. The application provides users with a spreadsheet interface, including support for cell dependencies, basic mathematical and data quality functions, and data entry/validation.

## Tech Stack
- **Frontend**: React.js, HTML, CSS
- **Backend**: Java (Spring Boot)
- **Database**: In-memory storage (extendable for future persistence)
- **Testing**: JUnit (Backend)
- **Security**: Basic input validation and user authentication (optional for basic version)

## Features Implemented
1. **Spreadsheet Interface**: Mimics Google Sheets with editable cells and formulas.
2. **Mathematical Functions**: SUM, AVERAGE, MAX, MIN, COUNT.
3. **Data Quality Functions**: TRIM, UPPER, LOWER, REMOVE_DUPLICATES, FIND_AND_REPLACE.
4. **Data Entry and Validation**: Support for numbers, text, and dates with validation.
5. **Bonus Features**: Save/load functionality, support for complex formulas, cell referencing.

## Running the Application
1. Clone the repository:
https://github.com/username/google-sheets-mimic.git
2. Install dependencies and build the project:
- Frontend: `npm install` and `npm start`
- Backend: `mvn clean install` and `mvn spring-boot:run`

## Testing
- Backend tests can be run using:

## Security and Performance Considerations
- Basic input validation is applied to prevent invalid data types from being entered into cells.
- The application is designed to be easily extendable, with an in-memory database for quick testing.

## Future Improvements
- Persistent storage support (e.g., via a database).
- Enhanced security features (e.g., user authentication).
- More complex formula and charting capabilities.
