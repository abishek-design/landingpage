export enum ServiceOption {
  WebDesign = 'Web Design',
  AIAutomation = 'AI Automation',
  Both = 'Both'
}

export interface FormData {
  name: string;
  email: string;
  serviceInterest: ServiceOption;
  message: string;
}
