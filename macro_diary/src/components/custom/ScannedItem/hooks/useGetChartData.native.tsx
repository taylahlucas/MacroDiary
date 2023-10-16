import { MacroType } from '@utils/CustomTypes.native';
import { MacroEnum } from '@utils/CustomEnums.native';
import { ChartDataProps } from '@utils/CustomTypes.native';

const colors: string[] = [
  "#7A56D0",
  "#4FC0E8",
  "#5BE7C4",
  "#16B978",
  "#571B97",
  "#9C1DE8",
  "#F1568F"
]

const matchMacroToEnum = (macroType: MacroType): string[] => {
  const keys = Object.keys(macroType) as (keyof MacroType)[];
  return keys.map((key) => MacroEnum[key.toUpperCase() as keyof typeof MacroEnum]);
}

export function useGetChartData(macros: MacroType): ChartDataProps[] {
  const data: ChartDataProps[] = []
  const macroString = matchMacroToEnum(macros);
  
  Object.entries(macros).map((macro, index) => data.push({
    title: macroString[index],
    value: macro[1] as number,
    color: colors[index]
  }))
  
  return data;
}