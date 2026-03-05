This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Clone repo and install project dependencies
```bash
git clone https://github.com/MarijaJuo/android-tests-task.git

npm install
```
## Step 2: Install Appium globally and necessary driver for Android automation (UIAutomator2)

npm install -g appium

appium driver install uiautomator2

## Step 3: Install Wdio

npm install -g @wdio/cli

## Step 4: Create Android emulator
Required emulator with:
Device: Vanilla
API Level: 35

## Step 5: Run Android emulator

npm run android

## Step 6: Start Appium server

appium

## Step 7: Run tests with Wdio in separate terminal window

npx wdio run wdio.conf.js

## Congratulations! :tada:

You've successfully run and modified your tests

# Troubleshooting

- [Appium Troubleshooting](https://appium.readthedocs.io/en/latest/en/writing-running-appium/other/troubleshooting/)
