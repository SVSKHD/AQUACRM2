const StringEmailSplit = (email: string) => {
  let username = email.split("@");
  return username[0];
};

export { StringEmailSplit };
