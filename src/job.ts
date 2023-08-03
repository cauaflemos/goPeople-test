export class Job {
    ID:                 number;
    Description:        string;
    MaxCompletionDate:  Date;
    EstimatedTime:      number;

    constructor(
        id:                 number, 
        description:        string, 
        maxCompletionDate:  string, 
        estimatedTime:      string
    ) {
        this.ID =                   id;
        this.Description =          description;
        this.MaxCompletionDate =    new Date(maxCompletionDate);
        this.EstimatedTime =        parseInt(estimatedTime.split(" ")[0]);
    }
}
