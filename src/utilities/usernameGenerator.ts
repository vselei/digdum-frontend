import randNumber from './randNumber';

const usernameGenerator = (name: string) => {
  const lowerCaseName = name.toLowerCase();
  const splittedName = lowerCaseName.split(' ');
  
  const usernamePossibilities = [
    lowerCaseName,

  ]

  const randomNumber = randNumber(0, usernamePossibilities.length);

  let username;

  return username;
};

export default usernameGenerator;
