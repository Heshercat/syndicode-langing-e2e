import * as TestRail from 'testrail-api';
import * as Credentials from '../constants/testrailCredentials.json';
import { IProject } from 'testrail-api';

const testrail = new TestRail({
    host: Credentials.testrailhost,
    user: Credentials.email,
    password: Credentials.password,
});

const filters: TestRail.IProjectFilters = {
    is_completed: 0
}; // Set any filters you needis_completed: 0 here

export const xz = () => testrail.getProjects(filters, (error: Error | null, projects: IProject[]) => {
    if (error) {
        console.error(error);
    } else {
        console.log(projects);
    }
});