import type { Certification } from "../types/certifications";

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Data Science Capstone",
    issuer: "HarvardX (edX)",
    issuerIconName: "edX", // or use "edx" if available, or custom logo
    issueDate: "2025-07-01",
    credentialID: "91c0ead05f6c46f5886d61c03d194f99",
    credentialURL:
      "https://courses.edx.org/certificates/91c0ead05f6c46f5886d61c03d194f99",
  },
  {
    title: "Career Essentials in System Administration",
    issuer: "Microsoft (LinkedIn Learning)",
    issuerIconName: "microsoft",
    issueDate: "2023-01-01",
    credentialID:
      "4dc32fcf22f83d4917fb91a082cfea133c73321cf29367fe1d0b609430c2f02d",
    credentialURL:
      "https://www.linkedin.com/learning/certificates/4dc32fcf22f83d4917fb91a082cfea133c73321cf29367fe1d0b609430c2f02d",
  },
  {
    title: "Ethical Hacking",
    issuer: "CompTIA (LinkedIn Learning)",
    issuerIconName: "comptia", // or use custom logo if CompTIA icon not available
    issueDate: "2022-12-01",
    credentialID:
      "538eb1a9cd6162053897821b307026b64273d668ad4abfddf8685dfe374d51e4",
    credentialURL:
      "https://www.linkedin.com/learning/certificates/538eb1a9cd6162053897821b307026b64273d668ad4abfddf8685dfe374d51e4",
  },
];
