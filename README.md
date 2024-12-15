# Web Extension for HTML Text Extraction

This is a web extension that scrapes text from the selected HTML element in the browser. It was built using React, Webpack, and Chrome extension APIs.

## Features

- Extract text from selected HTML elements
- Easy-to-use browser extension
- Built with React and Webpack

## Setup and Installation

To set up and build the extension, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/NitishKumar078/Text-Extractor
   cd your-repo-name
   
2. **Install dependencies**
   ```bash
   npm install

3. **Build the extension**
   ```bash
   npm run build
   
4. **Load the extension in Chrome**
   - Open Chrome and navigate to chrome://extensions/
   - Enable "Developer mode" (toggle in the top right)
   - Click "Load unpacked" and select the build folder from your project directory
  
5. **Usage**
-Open the Chrome browser and navigate to a web page.
-Select the text within any HTML element you want to extract.
-Click on the extension icon to extract and display the text.


**Project Structure.** <br/>

      ├── public  <br/>
      │   ├── icons/...    <br/>
      |   ├── manifest.html  <br/>
      ├── src   <br/>
      │   ├── background.js  <br/>
      │   ├── content.js  <br/>
      │   ├── react/...  <br/>
      │   |   ├── index.js  <br/>
      |   |   ├── components/...  <br/>
      |   |   └── index.tsx  <br/>
      │   ├── index.html  <br/>
      ├── package.json  <br/>
      ├── otherFiles...  <br/>
      └── README.md  <br/>

