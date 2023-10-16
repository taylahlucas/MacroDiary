module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  pluguns: [
    [
      'module-resolver',
      {
        root: [path.resolve(__dirname, './')],
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.js', '.jsx', '.json'],
        alias: {
          '@modules': path.resolve(__dirname, 'src/assets/'),
          '@components': path.resolve(__dirname, 'src/components/'),
          '@mock': path.resolve(__dirname, 'src/mock/'),
          '@navigation': path.resolve(__dirname, 'src/navigation/'),
          '@redux': path.resolve(__dirname, 'src/redux/'),
          '@screens': path.resolve(__dirname, 'src/screens/'),
          '@styles': path.resolve(__dirname, 'src/styles/'),
          '@utils': path.resolve(__dirname, 'src/utils/'),
        }
      }
    ]
  ]
};
