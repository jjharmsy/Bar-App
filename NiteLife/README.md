# **Starting Point**
Here is a place for us to get started right now only the login page is implemented. I was able to grab the code from [This tutorial](https://code.tutsplus.com/tutorials/common-react-native-app-layouts-login-page--cms-27639). This works using [expo](https://docs.expo.dev/get-started/installation/) to start a local server running on the editing machine, then you open the expo app on your phone after starting the server. Then you can view and interact with the app. Also this doesn't look good _yet_ on webview.

# **Running Locally**

1. Ensure you have ReactNative, Nodejs, and Expo(_this one should be on local machine and as an app on your phone_) installed.
    - make sure to make an expo account. Use `npx expo login` to login to your account on your machine once you have expo installed on machine in VSCode environment. [see here](https://reactnative.dev/docs/environment-setup)
2. navigate to the `NiteLife` directory (_this directory_).
3. run the `npx expo start` command (_you may have to use `sudo`_)
4. Use the expo cli to open in web browser or open the expo app on your phone and connect to the local server. Expo will automatically offload the app to your phone and it should load in properly.
5. Continue development without ending expo in your terminal and now every time you save the app will automatically refresh on your phone (_if not just press `r` in the terminal_).
