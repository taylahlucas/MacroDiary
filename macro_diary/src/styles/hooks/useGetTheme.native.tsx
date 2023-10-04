import { darkTheme } from "../colors.native";

const useGetTheme = () => {
  // TODO: Uncomment when light theme is added
  // const isDarkMode = useColorScheme() === 'dark';
  // const theme = isDarkMode ? darkTheme

  return darkTheme;
};

export default useGetTheme;