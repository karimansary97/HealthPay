
https://github.com/karimansary97/HealthPay/assets/46077002/db241c5f-7073-48c0-afe7-3ae522999dde
# Todo App 
### help you to make your todo list 

#Demo
https://github.com/karimansary97/HealthPay/assets/46077002/eadd10e7-adcb-4627-8109-51e1152514c4


## Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Clone the repo 

```bash
git clone https://github.com/karimansary97/HealthPay.git
```

## Step 2: install dependencies 


```bash
# using yarn first step 
yarn
```

### For iOS

```bash
# step 1
npx pod-install

# step 2
yarn ios
```

### For Android
>**Note**: make sure you have jdk more than 17  and config it path in HealthPay/android/gradle.properties and put your jdk path example org.gradle.java.home=/Library/Java/JavaVirtualMachines/jdk-17.jdk/contents/Home


https://github.com/karimansary97/HealthPay/assets/46077002/66462f93-e19d-474f-80cd-3515a51d64eb


```bash
# step 
yarn android
```

### For FireBase 

>**Note**: Please contact me to give the permission you want to test notifications and you could check the video 


### folder and file structure
```
.
├── App.tsx
├── assets
│   ├── Close.svg
│   ├── Splash.svg
│   ├── add.svg
│   ├── delete.svg
│   ├── noTask.svg
│   ├── plus.svg
│   └── share.svg
├── components
│   ├── Badge
│   │   ├── Badge.tsx
│   │   └── index.ts
│   ├── FloatButton
│   │   ├── FloatButton.tsx
│   │   └── index.ts
│   ├── Layout
│   │   ├── Header.tsx
│   │   ├── Layout.style.ts
│   │   ├── Layout.tsx
│   │   ├── Layout.type.ts
│   │   └── index.ts
│   ├── Text
│   │   ├── Text.style.ts
│   │   ├── Text.tsx
│   │   ├── index.ts
│   │   └── textTypes.ts
│   └── TodoList
│       ├── CheckModal.tsx
│       ├── ListHeaderComponent.tsx
│       ├── ListRenderRightIcons.tsx
│       ├── TodoCard.tsx
│       ├── TodoList.tsx
│       └── index.ts
├── config
├── helpers
├── hooks
│   ├── useFirbaseNotifications.ts
│   ├── useGetFirebaseDeviceToken.ts
│   ├── useNavigation.ts
│   ├── useRoute.ts
│   └── useTodoList.ts
├── navigation
│   ├── MainNavigation.tsx
│   └── routes.ts
├── screens
│   ├── Home
│   │   ├── Home.tsx
│   │   └── index.ts
│   └── TodoDetails
│       ├── TodoDetails.tsx
│       └── index.ts
├── styles
│   ├── colors.ts
│   ├── icons.ts
│   └── unit.ts
└── types
    ├── TodoList.type.ts
    └── global.d.ts
```
### Libraries used
```
 #react-navigation/native
 #react-navigation/stack
 #react-native-firebase/app
 #react-native-firebase/messaging
 #notifee/react-native
 #react-native-bootsplash
 #react-native-bouncy-checkbox
 #react-native-gesture-handler
 #react-native-safe-area-context
 #react-native-screens
 #react-native-svg
 #react-native-uuid
 #zustand
```
 
