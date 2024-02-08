import { Payslip } from "./types";

const samplePdf = "https://filesamples.com/samples/document/pdf/sample1.pdf";
const payslips: Payslip[] = [
  {
    id: "1234-5678-9012-3456",
    fromDate: "2023-01-01",
    toDate: "2023-01-31",
    file: samplePdf,
  },
  {
    id: "2345-6789-0123-4567",
    fromDate: "2023-02-01",
    toDate: "2023-03-03",
    file: samplePdf,
  },
  {
    id: "3456-7890-1234-5678",
    fromDate: "2023-03-04",
    toDate: "2023-04-03",
    file: samplePdf,
  },
  {
    id: "4567-8901-2345-6789",
    fromDate: "2023-04-04",
    toDate: "2023-05-04",
    file: samplePdf,
  },
  {
    id: "5678-9012-3456-7890",
    fromDate: "2023-05-05",
    toDate: "2023-06-04",
    file: samplePdf,
  },
  {
    id: "6789-0123-4567-8901",
    fromDate: "2023-07-05",
    toDate: "2023-08-04",
    file: samplePdf,
  },
  {
    id: "7890-1234-5678-9012",
    fromDate: "2023-08-05",
    toDate: "2023-09-04",
    file: samplePdf,
  },
  {
    id: "8901-2345-6789-0123",
    fromDate: "2023-09-05",
    toDate: "2023-10-04",
    file: samplePdf,
  },
  {
    id: "9012-3456-7890-1234",
    fromDate: "2023-10-05",
    toDate: "2023-11-04",
    file: samplePdf,
  },
  {
    id: "0123-4567-8901-2345",
    fromDate: "2023-11-05",
    toDate: "2023-12-04",
    file: samplePdf,
  },
];

export { payslips };
