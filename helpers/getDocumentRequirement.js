export const getDocumentRequirement = (
  data,
  document,
  parameter,
  operator,
  condition
) => {

  return data && data[document] && data[document][parameter]
    ? data[document][parameter][operator]
      ? operator === "==="
        ? typeof condition === "string"
          ? data[document][parameter][operator].includes(condition)
          : data[document][parameter][operator].filter((conditionData) =>
              condition.includes(conditionData)
            ).length
        : typeof condition === "string"
        ? !data[document][parameter][operator].includes(condition)
        : data[document][parameter][operator].filter((conditionData) =>
            condition.includes(conditionData)
          ).length
      : false
    : false;
};
