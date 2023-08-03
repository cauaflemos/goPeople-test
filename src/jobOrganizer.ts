import { Job } from './job';

export const organizeJobs = (jobs: Job[]) => {
    jobs.sort((a, b) => a.MaxCompletionDate.getTime() - b.MaxCompletionDate.getTime());

    const jobLists: Job[][] = [];
    let currentList: Job[]  = [];
    let hours               = 0;

    for (const job of jobs) {
        if (hours + job.EstimatedTime > 8) {
            jobLists.push(currentList);
            currentList = [];
            hours   = 0;
        }
        currentList.push(job);
        hours += job.EstimatedTime;
    }

    if (currentList.length) jobLists.push(currentList);

    return jobLists;
}