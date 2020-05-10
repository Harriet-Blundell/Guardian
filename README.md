# The Guardian

## Contents:

- [General Information](#General-Information)
- [Getting Started](#Getting-Started)
- [Tech Stack](#Tech-Stack)

## General Information:

This project, the Guardian, uses React Native to build a front-end UI and serves as an online daily newspaper where users can view most recent articles, subscribe to the Guardian, search articles by keyword(s) and view the single article.

---

## Getting Started:

This section will expalin how you can clone a copy of this repository to run on your own local machine.

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

## Tech Stack:

- React Native
- Axios
- Mocha and Chai
