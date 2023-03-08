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

export interface signup{
  fullname: string;
  mobile: number;
  email: string;
  password: string;
  cpassword: string;
}