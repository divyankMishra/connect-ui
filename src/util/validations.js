export function validEmail(text) {
  const regex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  return regex.test(text);
}

export function validUsername(name) {
  const regex = RegExp(/^[a-zA-Z\d]+$/);
  return regex.test(name);
}
