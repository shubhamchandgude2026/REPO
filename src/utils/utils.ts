
export const createMapper = <T extends { value: string; label: string }>(
  list: Array<T>
) => {
  return list.reduce<Record<string,string>>((obj, item) => {
    obj[item.value] = item.label;
    return obj;
  }, {});
};


type MonthYear ={
    month:number;
    year:number;
}
export const getMonthYearFromInput=(date: Date = new Date()):MonthYear=>
{
    return {
        month: date?.getMonth() +1,
        year: date?.getFullYear()
    }
}
