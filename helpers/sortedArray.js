export const ascByGenericName = (array) => {
  return array.sort(function (a, b) {
    if (a.genericName < b.genericName) {
      return -1;
    }
    if (a.genericName > b.genericName) {
      return 1;
    }
    return 0;
  });
};

export const descByGenericName = (array) => {
  return array.sort(function (a, b) {
    if (b.genericName < a.genericName) {
      return -1;
    }
    if (b.genericName > a.genericName) {
      return 1;
    }
    return 0;
  });
};

export const ascByApprovalLevel = (array) => {
  return array.sort(function (a, b) {
    if (a.approvalLevel < b.approvalLevel) {
      return -1;
    }
    if (a.approvalLevel > b.approvalLevel) {
      return 1;
    }
    return 0;
  });
};

export const ascById = (array) => {
  return array.sort(function (a, b) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  });
};

export const descByApprovalLevel = (array) => {
  return array.sort(function (a, b) {
    if (b.approvalLevel < a.approvalLevel) {
      return -1;
    }
    if (b.approvalLevel > a.approvalLevel) {
      return 1;
    }
    return 0;
  });
};

export const ascByCreatedDate = (array) => {
  return array.sort(function (a, b) {
    return new Date(b.createdDate) - new Date(a.createdDate);
  });
};

export const descByCreatedDate = (array) => {
  return array.sort(function (a, b) {
    return new Date(a.createdDate) - new Date(b.createdDate);
  });
};
