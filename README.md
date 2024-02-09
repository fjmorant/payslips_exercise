
# Payslips Exercise

This project is designed to demonstrate a payslip application.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm installed on your machine
- Git installed on your machine
- iOS and Android development environments set up for deploying to mobile devices (Xcode for iOS and Android Studio for Android)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Clone the repository

```bash
git clone https://github.com/fjmorant/payslips_exercise.git
```

### Navigate to the project directory

```bash
cd payslips_exercise
```

### Install dependencies

Install the project dependencies using npm:

```bash
npm i
```

### Build the project

Compile the TypeScript files and prepare the project for deployment:

```bash
npm run build
```

### Sync with Capacitor

Synchronize the web assets with the Capacitor mobile project:

```bash
npx cap sync
```

### Deploy to iOS

Deploy the application to an iOS device or emulator:

```bash
npx cap run ios
```

Ensure you have Xcode set up and an iOS device or emulator configured.

### Deploy to Android

Deploy the application to an Android device or emulator:

```bash
npx cap run android
```

Ensure you have Android Studio set up and an Android device or emulator configured.
