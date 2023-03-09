import randNumber from './randNumber';

const usernameGenerator = (name: string) => {
  const lowerCaseName = name.toLowerCase();

  let usernamePossibilities = [
    lowerCaseName,
    `${lowerCaseName}_`,
    `_${lowerCaseName}`,
    `${lowerCaseName}${randNumber(0, 1000)}`,
    `_${lowerCaseName}${randNumber(0, 1000)}`,
    `${lowerCaseName}${randNumber(0, 1000)}_`
  ];

  if (lowerCaseName.trim().includes(' ')) {
    const splittedName = lowerCaseName.split(' ');

    usernamePossibilities = [
      splittedName.join('-'),
      splittedName.join('.'),
      splittedName.join('_'),
      splittedName
        .map((name, index, array) =>
          index === array.length - 1 ? name : array[index][0]
        )
        .join(''),
      splittedName
        .map((name, index, array) =>
          index === array.length - 1 ? array[index][0] : name
        )
        .join(''),
      splittedName
        .map((name, index, array) =>
          index === array.length - 1 || index === 0 ? array[index][0] : name
        )
        .join(''),
      splittedName.reverse().join('-'),
      splittedName.reverse().join('.'),
      splittedName.reverse().join('_'),
      `${splittedName[splittedName.length - 1]}`,
      `${splittedName[splittedName.length - 1]}_`,
      `_${splittedName[splittedName.length - 1]}`,
      `${splittedName[splittedName.length - 1]}${splittedName[0][0]}`,
      `${splittedName[splittedName.length - 1]}${randNumber(0, 1000)}`,
      `_${splittedName[splittedName.length - 1]}${randNumber(0, 1000)}`,
      `${splittedName[splittedName.length - 1]}${randNumber(0, 1000)}_`,
      `${splittedName.join('-')}${randNumber(0, 1000)}`,
      `${splittedName.join('.')}${randNumber(0, 1000)}`,
      `${splittedName.join('_')}${randNumber(0, 1000)}`,
      `${splittedName.reverse().join('-')}${randNumber(0, 1000)}`,
      `${splittedName.reverse().join('.')}${randNumber(0, 1000)}`,
      `${splittedName.reverse().join('_')}${randNumber(0, 1000)}`
    ];
  }

  const randomNumber = randNumber(0, usernamePossibilities.length);

  return usernamePossibilities[randomNumber];
};

export default usernameGenerator;
