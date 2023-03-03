export interface project {
  id: number;
  projectName: string;
  key: string;
  type: string;
  // task: string;
  // inProgress: string;
  // done: string;
  summary: string;
}

export interface todo {
  id: number;
  description: string;
  // done: boolean;
}