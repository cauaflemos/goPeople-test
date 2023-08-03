import { Job } from "./job";
import { organizeJobs } from "./jobOrganizer";

const jobsArr = [
    new Job(1, 'Importação de arquivos de fundos', '2021-02-04 12:00:00', '8 horas'),
    new Job(2, 'Importação de dados da Base Legada', '2021-02-04 12:00:00', '4 horas'),
    new Job(3, 'Importação de dados', '2021-02-02 12:00:00', '6 horas'),
    new Job(4, 'Desenvolver historia 745', '2021-02-02 12:00:00', '2 horas'),
    new Job(5, 'Gerar QRCode', '2020-02-15 12:00:00', '6 horas'),
    new Job(6, 'Importação de dados de integração', '2020-02-15 12:00:00', '8 horas')
];

const jobs = organizeJobs(jobsArr);

console.log(jobs);
