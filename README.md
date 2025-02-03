# YouTube to MP3 Converter (Backend & Frontend)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Node Version](https://img.shields.io/badge/node-%3E%3D%2014.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-blue)
![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen)

This is a full-stack web application that allows you to convert YouTube videos into MP3 files. It consists of a backend for handling video conversion and a frontend for user interaction. The backend uses Node.js with Express to handle video download and conversion, while the frontend offers a simple interface to input YouTube links and download the MP3 files.

## How to run
1. Clone the repository:
`git clone https://github.com/yourusername/youtube-to-mp3-converter.git`

2. Install dependencies for both the backend and frontend:
In the root folder, run:
`npm install`
Then, navigate to the backend folder and run:
`npm install`

3. Run the server:
- For the backend:
`npm run start:backend`

- For the frontend:
`npm run start:frontend`

4. Open the browser and go to: `http://localhost:3000`.

## Features
- Insert the YouTube video link.
- Download the song in MP3 format.

## Backend Features:

- **Video to MP3 Conversion**: Using ytdl-core or similar libraries for video download and MP3 conversion.
  
- **URL Validation**: Ensures that the URL provided by the user is valid before proceeding with conversion.

- **Testing**: Jest is used for unit and integration tests to ensure that the backend functions properly.

## Running Tests
To run the backend tests, simply execute the following command:

```bash
npm test
```

This will run Jest tests for the backend to ensure that the video conversion and URL validation functionalities are working as expected.

## Technologies

#### Backend

- **Node.js with Express**: Framework used for setting up the backend server.
  
- **ytdl-core**: Library used to download and convert YouTube videos to MP3.

- **Jest**: Testing framework for unit and integration tests.

#### Frontend

- **HTML/CSS**: Used to build the basic structure and style of the webpage.
  
- **Javascript**: For interactivity (handling input and displaying results).
  
- **React (Optional)**: If necessary, React could be used for a more dynamic and interactive interface.

## Contributions

Pull requests are welcome, especially for improving the backend and frontend functionalities. If you're planning to make significant changes, such as refactoring the backend or adding new features to the frontend, please open an issue to discuss your changes first.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes.
4. Test the changes.
5. Send a pull request with a detailed description of what you've changed.

## Warning ⚠️
This project is for educational purposes only. Be sure to respect copyright when using this tool.

## Licence

This project is licensed under the terms of the [MIT Licence](LICENSE).