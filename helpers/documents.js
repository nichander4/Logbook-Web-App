// Register Supplier & My Profile
const groupBy = (data, property) => {
  return data.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
};

const groupByIndividual = (data, property, individualKey) => {
  return data.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj[individualKey]);
    return acc;
  }, {});
};

export const groupSuppDoc = (data) => {
  let tempGroup = groupBy(data, "document");

  Object.keys(tempGroup).forEach((paramKey) => {
    tempGroup[paramKey] = groupBy(tempGroup[paramKey], "parameter");

    Object.keys(tempGroup[paramKey]).forEach((operatorKey) => {
      tempGroup[paramKey][operatorKey] = groupByIndividual(
        tempGroup[paramKey][operatorKey],
        "operator",
        "condition"
      );
    });
  });

  return tempGroup || {};
};