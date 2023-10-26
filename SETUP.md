# Manage College UI
This guide provides step-by-step instructions to set up and run the Manage College UI project on your local machine. Before you begin, ensure you have the following prerequisites installed:

## Prerequisites
- Node.js - Required for running Angular applications.
- npm (Node Package Manager) - Comes with Node.js.
- Angular CLI - The official command-line tool for Angular development.

# Installation and Setup
### Follow these steps to set up the project:

1. Clone the Project

```GIT
git clone https://github.com/JManito/manage-college-ui.git
cd manage-college-ui
```

2. Install Dependencies
   
<sub> This command installs all the project dependencies specified in the package.json file. </sub>
```JS
npm install
```


3. Configure API Base URL
Open the project's environment configuration files located in the **src/environments** folder. Update the baseApiUrl property to point to your API server:

<sub>You'll want to change the environment.development.ts or environment.ts file:</sub>
```C#
export const environment = {
  production: false,
  baseApiUrl: 'http://your-api-server.com/api', // Update this URL
};
```

4. Start the Development Server

```JS
npm start
```
<sub>The final command compiles the project and starts the development server. You should see an output indicating the server is running, typically at http://localhost:4200/.</sub>

5. Open the Application

Open your web browser and navigate to http://localhost:4200/ (or the URL displayed in the console). You should see the application running.
