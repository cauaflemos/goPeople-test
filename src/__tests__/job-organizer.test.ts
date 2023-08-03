import { Job } from '../job';
import { organizeJobs } from '../jobOrganizer';

describe("Testing function organizeJobs", () => {
    it("Organize all jobs", () => {
        let jobs = [
            new Job(1, 'Importação de arquivos de fundos', '2021-02-04 12:00:00', '8 horas'),
            new Job(2, 'Importação de dados da Base Legada', '2021-02-04 12:00:00', '4 horas'),
            new Job(3, 'Importação de dados', '2021-02-02 12:00:00', '6 horas'),
            new Job(4, 'Desenvolver historia 745', '2021-02-02 12:00:00', '2 horas'),
            new Job(5, 'Gerar QRCode', '2020-02-15 12:00:00', '6 horas'),
            new Job(6, 'Importação de dados de integração', '2020-02-15 12:00:00', '8 horas')
        ];

        let result = organizeJobs(jobs);

        expect(result).toHaveLength(5);
        expect(result[0]).toHaveLength(1);
        expect(result[0][0].ID).toBe(5);
        expect(result[1]).toHaveLength(1);
        expect(result[1][0].ID).toBe(6);
        expect(result[2]).toHaveLength(2);
        expect(result[2][0].ID).toBe(3);
        expect(result[2][1].ID).toBe(4);
        expect(result[3]).toHaveLength(1);
        expect(result[3][0].ID).toBe(1);
        expect(result[4]).toHaveLength(1);
        expect(result[4][0].ID).toBe(2);
    });
});