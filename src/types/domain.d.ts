export interface Assignor {
  id: string;
  name: string;
}

export interface Assignment {
  id: string;
  assignor: Assignor;
  role: string;
}
