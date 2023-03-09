import randNumber from './randNumber';

const usernameGenerator = (name: string) => {
  const lowerCaseName = name.toLowerCase();

  let usernamePossibilities = [lowerCaseName];

  if (lowerCaseName.trim().includes(' ')) {
    const splittedName = lowerCaseName.split(' ');

    usernamePossibilities = [
      splittedName.join('-'),
      splittedName.join('.'),
      splittedName
        .map((name, index, array) =>
          index === array.length - 1 ? name : array[index][0]
        )
        .join(''),
      splittedName.reverse().join('-'),
      splittedName.reverse().join('.'),
      `${splittedName[splittedName.length - 1]}${splittedName[0][0]}`
    ];
  }

  const randomNumber = randNumber(0, usernamePossibilities.length);

  return usernamePossibilities[randomNumber];
};

export default usernameGenerator;
