namespace Subjects {
	export interface Teacher {
		firstName: string;
		lastName: string;
		experienceTeachingC?: number;
	}

	export class Cpp extends Subject {
		getRequirements(): string {
			return 'Here is the list of requirements for Cpp';
		}

		getAvailableTeacher(): string {
			return this.teacher.experienceTeachingC ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
			}
		}
	}
