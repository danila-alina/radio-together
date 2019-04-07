export function getAuth({ user }) {
  return user.isAuthorised;
}

export function getRadiostation({ user }) {
  return user.radiostation;
}
