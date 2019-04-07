export function getAuth({ user }) {
  return user.isAuthorised;
}

export function getUserInfo({ user }) {
  return user;
}

export function getRadiostation({ user }) {
  return user.radiostation;
}
