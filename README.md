# 🎬 Movie Search Project with Node.js, Express, and OMDb API

This project is a web application that allows users to search for movie information using the OMDb API (Open Movie Database). Users can type a movie name into an input field on the HTML page, and the application returns the movie's title and synopsis.

## 🚀 How to Run the Project

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine. You can download it [here](https://nodejs.org/).
- **OMDb API Key**: To use the OMDb API, you need to sign up on the [OMDb API](https://www.omdbapi.com/apikey.aspx) website and obtain an API key.

### Steps to Run the Project

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/repository-name.git
   cd repository-name
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create the `.env` file**:
   - Create a file named `.env` in the root of the project.
   - Add the following line to the `.env` file, replacing `YOUR_API_KEY` with the key you obtained from the OMDb website:
     ```env
     API_KEY=YOUR_API_KEY
     ```

4. **Start the server**:
   ```bash
   npm start
   ```

5. **Access the application**:
   - Open your browser and go to `http://localhost:3000`.
   - Type a movie name into the input field and click search to see the movie's title and synopsis.

## 📂 Project Structure

- **`public/`**: Contains static files such as HTML, CSS, and JavaScript.
  - **`index.html`**: The main page where users can type a movie name and view the results.
  - **`styles.css`**: The styling file for the HTML page.
  - **`script.js`**: The JavaScript file that communicates with the server to fetch movie data.

- **`src/`**: Contains the Node.js server code.
  - **`server.js`**: The main server file where the application is configured and routes are defined.
  - **`api.js`**: The file responsible for making requests to the OMDb API.

- **`.env`**: Configuration file where the API key is stored.

- **`package.json`**: Contains the project dependencies and scripts to run the application.

## 💡 Key Learnings

- **Project Organization**: I learned how to organize project files following best practices and naming conventions.
- **Modularity**: I structured the code in a modular way, making it easier to maintain and understand.
- **Back-end and Front-end Integration**: I learned how to integrate the back-end (Node.js and Express) with the front-end (HTML, CSS, and JavaScript) to create a seamless user experience.
- **Styling**: Although I'm still improving my CSS skills, I managed to create a simple and functional interface.

## 📝 Final Thoughts

This project was a significant step in my web development learning journey. Despite the challenges, I was able to create a functional and organized application that serves as a foundation for future projects. Feel free to explore the code, make improvements, and contribute!

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
