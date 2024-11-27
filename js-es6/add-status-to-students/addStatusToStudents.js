const students = [
  { id: 1, name: 'Juan', age: 20, grade: 2 },
  { id: 2, name: 'Nicolas', age: 22, grade: 6 },
  { id: 3, name: 'Agustín', age: 23, grade: 8 },
  { id: 4, name: 'David', age: 21, grade: 4 },
  { id: 5, name: 'Camila', age: 20, grade: 3.5 }
];

const addStatusToStudents = (students) => { // Creamos funcion
  return students.map(student => {
      return {
          ...student, // Copia todas las propiedades del estudiante original (...spred operator)
          status: student.grade >= 4 ? 'Aprobado' : 'Desaprobado' // Determina el estado con el condicional
      };
  });
};

// Crear un nuevo array con los estudiantes con su status
const studentsWithStatus = addStatusToStudents(students);

// Filter estudiantes aprobados y desaprobados
const approvedStudents = studentsWithStatus.filter(student => student.status === 'Aprobado');
const failedStudents = studentsWithStatus.filter(student => student.status === 'Desaprobado');

// Mostrar resultados
console.log('Estudiantes con status:', studentsWithStatus);
console.log('Estudiantes aprobados:', approvedStudents);
console.log('Estudiantes desaprobados:', failedStudents);
