# MacroDiary

#### 13th October 2023

An application which tracks macro and vitamin intake built using React Native &amp; Typescript.
Features include:
  - Includes barcode scanning functionality to scan products and their macros throughout the UK.
  - Add custom recipes to a diary to track intake.
  - View recently scanned items, recipes and recently added recipes.

  ** WORK IN PROGRESS **
  
<img width="366" alt="Screenshot 2024-01-30 at 10 47 56 am" src="https://github.com/taylahlucas/MacroDiary/assets/53559103/dbb5dc43-0828-4a2a-922e-1dd3b66ca17f">

# Setup

- cd macro-diary
- npm install
- cd ios
- pod install
- cd ..
- npm start

# Packages

- expo-barcode-scanner
  - expo
- axios
- react-native-vector-icons && @types/react-native-vector-icons
- react-native-gifted-charts
  - react-native-svg
  - react-native-linear-gradient
- @react-navigation/native
  - react-native-screens
  - react-native-safe-area-context
- @reduxjs/toolkit
  - react-redux
  - redux-logger && @types/redux-logger
- styled-components
  - @types/styled-components
  - babel-plugin-styled-components
- moment
  - @types/moment

  # Folder Structure

  - /assets - Images, fonts and other global assets.
  - /components
    - /custom - Custom components.
    - /general - Reusable components.
  - /mock - Product and api mock data.
  - /navigation - Navigation components and functions.
  - /redux - Global state management.
  - /screens - App screens.
  - /styles - Global styles.
  - /utils - Constanst and Custom values.

# Licence

Shield: [![CC BY-NC-ND 4.0][cc-by-nc-nd-shield]][cc-by-nc-nd]

This work is licensed under a
[Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License][cc-by-nc-nd].

[![CC BY-NC-ND 4.0][cc-by-nc-nd-image]][cc-by-nc-nd]

[cc-by-nc-nd]: http://creativecommons.org/licenses/by-nc-nd/4.0/
[cc-by-nc-nd-image]: https://licensebuttons.net/l/by-nc-nd/4.0/88x31.png
[cc-by-nc-nd-shield]: https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg
