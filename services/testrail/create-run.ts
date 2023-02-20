import * as TestRail from 'testrail-api';
import * as Credentials from '../constants/testrailCredentials.json'

const testrail = new TestRail({
    host: Credentials.testrailhost,
    user: Credentials.email,
    password: Credentials.password
});

const projectId = Credentials.projectID;
const suiteId = Credentials.suiteID;
const runName = "AT Run from " + Date.now();
const runDescription = 'This is a test run created by my Playwright test project';

testrail.addRun(projectId, {
    suite_id: suiteId,
    name: runName,
    description: runDescription,
    include_all: true,
    milestone_id: null,
    assignedto_id: null,
    case_ids: []
});


