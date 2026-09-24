<!-- {# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions. 
} -->

1. Why is SecureStore more appropriate than plain-text storage for an access token?
expo-secure-store is designed to securely store small sensitive values such as access tokens. Plain-text app storage does not provide the same protection for sensitive authentication data. Using SecureStore reduces the risk of exposing an access token if someone gains access to the application's stored data. 

2 What is the purpose of the Authorization header?
The Authorization header sends the access token to the API so the server can identify and authenticate the user when accessing a protected resource. In this app, the token is sent using the Bearer scheme

3. What should the app do when a stored token is expired or rejected?
The app should treat the session as invalid, delete the stored token, clear the profile, and return the user to the login screen. It should show a normal user-friendly message rather than displaying token or server details.

# Secure Profile App

Karl Jun M. Calizar
CCE106 

A simple React Native / Expo mobile application that demonstrates:

- User authentication with DummyJSON
- Secure access-token storage with Expo SecureStore
- Protected API requests using a Bearer token
- Session restoration after app reload
- Logout and secure token deletion
- Loading, error, logged-out, and authenticated states

## Installation

Install the project dependencies:

```bash
npm install
npx expo install expo-secure-store
npx expo start
npm install react-native-safe-area-context
