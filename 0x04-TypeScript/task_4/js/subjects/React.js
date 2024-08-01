namespace Subjects {
	export interface Teacher {
		firstName: string;
		lastName: string;
		experienceTeachingReact?: number;
	}

	export class React extends Subject {
		getRequirements(): string {
			return 'Here is the list of requirements for React';
		}

		getAvailableTeacher(): string {
			return this.teacher.experienceTeachingReact ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
		}
	}
}
