const students = [
  {
    id: 1,
    firstName: 'Ben',
    lastName: 'Jarret',
    isDead: false
  },
  {
    id: 2,
    firstName: 'Casey',
    lastName: 'Walker',
    isDead: false,
  },
  {
    id: 3,
    firstName: 'Chie',
    lastName: 'Stroud',
    isDead: false,
  },
  {
    id: 4,
    firstName: 'Chris',
    lastName: 'Meffley',
    isDead: false,
  },
  {
    id: 5,
    firstName: 'Dani',
    lastName: 'Crosby',
    isDead: false,
  },
  {
    id: 6,
    firstName: 'Ellie',
    lastName: 'Walker',
    isDead: false,
  },
  {
    id: 7,
    firstName: 'Martin',
    lastName: 'Sisk',
    isDead: false
  },
  {
    id: 8,
    firstName: 'Gabby',
    lastName: 'Tobermann',
    isDead: false
  },
  {
    id: 9,
    firstName: 'Matthew',
    lastName: 'Gonzales',
    isDead: false,
  },
  {
    id: 10,
    firstName: 'John',
    lastName: 'Maple',
    isDead: false
  },
  {
    id: 11,
    firstName: 'Holly',
    lastName: 'Parsons',
    isDead: false
  },
  {
    id: 12,
    firstName: 'Hunter',
    lastName: 'Juneau',
    isDead: false
  },
  {
    id: 13,
    firstName: 'Jim',
    lastName: 'Conner',
    isDead: false,
  },
  {
    id: 14,
    firstName: 'Jesse',
    lastName: 'Robinson',
    isDead: false,
  },
  {
    id: 15,
    firstName: 'Juan',
    lastName: 'Davila',
    isDead: false,
  },
  {
    id: 16,
    firstName: 'Jim',
    lastName: 'Conner',
    isDead: false,
  },
  {
    id: 17,
    firstName: 'Katy',
    lastName: 'Fry',
    isDead: false,
  },
  {
    id: 18,
    firstName: 'Lindsey',
    lastName: 'Satterfiled',
    isDead: false,
  },
  {
    id: 19,
    firstName: 'Mitchell',
    lastName: 'Crumbley',
    isDead: false,
  },
  {
    id: 20,
    firstName: 'Nathan',
    lastName: 'Keith',
    isDead: false,
  },
  {
    id: 21,
    firstName: 'Rob',
    lastName: 'Cole',
    isDead: false,
  },
  {
    id: 22,
    firstName: 'Sara',
    lastName: 'Schoonover',
    isDead: false,
  },
  {
    id: 23,
    firstName: 'Sean',
    lastName: 'Rossettie',
    isDead: false,
  },
  {
    id: 24,
    firstName: 'Honey-Rae',
    lastName: 'Swan',
    isDead: false,
  },
  {
    id: 25,
    firstName: 'Tad',
    lastName: 'Sekeres',
    isDead: false,
  }
];

const getLiveStudents = () => students.filter((student) => !student.isDead);
const getDeadStudents = () => students.filter((student) => student.isDead);

const killStudent = () => {
  const currentLiveStudents = getLiveStudents();
  const randomStudent = currentLiveStudents[Math.floor(Math.random() * currentLiveStudents.length)];

  const index = students.indexOf(randomStudent);

  students[index].isDead = true;

  return [getLiveStudents(), getDeadStudents()];
};

export {
  getLiveStudents,
  getDeadStudents,
  killStudent,
  students
};
