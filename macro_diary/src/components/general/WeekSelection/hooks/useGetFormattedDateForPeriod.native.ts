import moment from "moment";
import { months } from "../../../../utils/Constants.native";

const useGetFormattedDateForPeriod = () => {
  const getFormattedDateForPeriod = (date: string): string => {
    const month =  moment(date).month();
    const day = moment(date).date();

    return `${day} ${months[month]}`;
  };

  return getFormattedDateForPeriod
};

export default useGetFormattedDateForPeriod;
