
export const createMapper = <T extends { value: string; label: string }>(
  list: Array<T>
) => {
  return list.reduce<Record<string,string>>((obj, item) => {
    obj[item.value] = item.label;
    return obj;
  }, {});
};


