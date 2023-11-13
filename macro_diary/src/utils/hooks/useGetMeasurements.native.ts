import { MeasurementEnum } from '@utils/CustomEnums.native';

const useGetMeasurements = (): MeasurementEnum[] => {
  return [
    MeasurementEnum.TEASPOON,
    MeasurementEnum.TABLESPOON,
    MeasurementEnum.CUP,
    MeasurementEnum.MILLILITRE,
    MeasurementEnum.LITRE,
    MeasurementEnum.GRAM,
    MeasurementEnum.KILOGRAM
  ];
};

export default useGetMeasurements