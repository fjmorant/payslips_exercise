import { Payslip } from "./types";

const samplePdf = "https://filesamples.com/samples/document/pdf/sample1.pdf";
const payslips: Payslip[] = [
  {
    id: "1",
    fromDate: "2023-01-01",
    toDate: "2023-01-31",
    file: samplePdf,
  },
  {
    id: "2",
    fromDate: "2023-02-01",
    toDate: "2023-03-03",
    file: samplePdf,
  },
  {
    id: "3",
    fromDate: "2023-03-04",
    toDate: "2023-04-03",
    file: samplePdf,
  },
  {
    id: "4",
    fromDate: "2023-04-04",
    toDate: "2023-05-04",
    file: samplePdf,
  },
  {
    id: "5",
    fromDate: "2023-05-05",
    toDate: "2023-06-04",
    file: samplePdf,
  },
];

export default payslips;
