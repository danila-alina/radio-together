export const getAuth = ({ user }) => {
  return user.isAuthorised;
};

export const getUserInfo = ({ user }) => {
  return user;
};

export const getRadiostation = ({ user }) => {
  return user.radiostation;
};

export const getUserRadiostation = ({ user }, userId) => {
  return user.userRadiostation;
};
