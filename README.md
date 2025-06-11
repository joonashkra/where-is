# Where-is App
Mobile Application Development 2025 -coursework
This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npm run start
   ```
#### Note

Sometimes the above command only starts the web budler. If this happens try to run the client and server separately (not using concurrently-package)

   ```bash
    npx expo start
    npm run api
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Note

Project has a public .env file where you must set the ip of the JSON-server (most likely the PC you run the app bundler from)
