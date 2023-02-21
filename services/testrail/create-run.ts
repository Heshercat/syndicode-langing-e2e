import * as TestRail from 'testrail-api';
import * as Credentials from '../constants/testrailCredentials.json'
import { INewTestRunOptionalFields } from 'testrail-api';


const testrail = new TestRail({
    host: Credentials.testrailhost,
    user: Credentials.email,
    password: Credentials.password
});


const projectId = Credentials.projectID;
const suiteId = Credentials.suiteID;

const run: INewTestRunOptionalFields = {
    project_id: projectId,
    suite_id: suiteId,
    name: 'My Test Run'
  };
  
testrail.addNewRun(projectId, run);