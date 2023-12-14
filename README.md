# Getting Started

Install the dependencies of the project:
```bash
# using npm
npm install

# OR using Yarn
yarn
```

on iOS run the command ```pod install``` in the ./ios folder

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## How to run the E2E tests:

### For Android

```bash
npx detox test --configuration android.emu.debug
```

### For iOS

```bash
npx detox test --configuration ios.sim.debug
```

>**Note**: If you get an error about not having the following emulator installed just change the ```.detoxrc.js``` file on the simulator settings. You can read better in the docs: https://wix.github.io/Detox/docs/introduction/project-setup#step-3-device-configs

## Troubleshooting

If you are having problems to run the project or the tests you can send me a message on my email: eduardobravopires@gmail.com