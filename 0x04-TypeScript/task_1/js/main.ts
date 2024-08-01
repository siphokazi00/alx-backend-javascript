interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

	function createTeacher(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number): Teacher {
        return {
                firstName,
                lastName,
                fullTimeEmployee,
                location,
                yearsOfExperience,
        };
}

const teacher1 = createTeacher('Alice', 'Wonderland', true, 'New York', 5);
const teacher2 = createTeacher('Bob', 'Builder', false, 'London');
const teacher3 = createTeacher('Charlie', 'Brown', true, 'Paris', undefined, { contract: false }); // Adding extra property

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

interface Directors extend Teacher {
        numberOfReports: number;
}

const director1: Directors = {
        firstName: 'John",
        lastName: 'Doe',
        location: 'London',
        fullTimeEmployee: true,
        numberOfReports: 17,
};

console.log(director1);

interface PrintTeacherFunction {
	(firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string
        {
         return `${firstName'[0]}. ${lastName}`;
        }

interface StudentClassConstructor {
        new (firstName: string, lastName: string): StudentClass;
}

interface StudentClassInterface {
        workOnHomework(): string;
        displayName(): string;
}

class StudentClass implements StudentClassInterface {
        private firstName: string;
        private lastName: string;

        constructor(firstName: string, lastName: string) {
                this.firstName = firstName;
                this.lastName = lastName;
        }

        workOnHomework(): string {
          return 'Currently working';
        }

        displayName(): string {
          return this.firstName;
        }
}

const student = new StudentClass('John', 'Doe');
