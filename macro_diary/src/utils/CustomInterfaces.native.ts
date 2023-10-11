import { DiaryContentState } from "../components/custom/DiaryContent/DiaryContentState.native";
import { MainState } from "../redux/MainState.native";

export interface StoreState {
  main: MainState;
  diary: DiaryContentState;
}