# The Guardian

## Contents:

- [General Information](#General-Information)
- [Getting Started](#Getting-Started)
- [Tech Used](#Tech-Used)

## General Information:

This project, Guardian Summary, uses the Guardians own API to retrieve articles and article information from The Guardian and serve them to the user in a minimalist user-friendly mobile app.
Users can search for articles and browse a paginated list of returned results. Clicking articles on the search page allows the user to read the full unaltered article text.
Users also have the option to enter an email address in order to subscribe in the future.

---

## Getting Started:

This section will explain how you can clone a copy of this repository to run on your own local machine.

1. Clone the repository link below into your chosen folder

```bash
https://github.com/Harriet-Blundell/Guardian.git
```

2. Open the folder in your chosen code editor and then type the text below in your terminal

```bash
cd TheGuardian
```

3. Install Expo and dependencies:

```bash
npm install --global expo-cli

npm install
```

4. Get started by registering for a developer key by using [The Guardian API key](https://open-platform.theguardian.com/access/) and create a **config.js** file in TheGuardian directory and paste the code below into the file:

Replace **"your API key"** with the API key the Guardian provides you

```bash
const config = {
    apiKey: "your API key",
}

export default config
```

5. Use an iOS or Android emulator or install the Expo App on your mobile device and scan the QR code once the application has started running.

6. Start Expo:

```bash
expo start
```

---

## Tech Used:

- React Native - open-source mobile application framework
- Axios - http client for requesting API data
- Mocha and Chai - JavaScript test frameworks
