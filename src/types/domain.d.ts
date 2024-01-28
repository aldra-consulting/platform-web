export interface Client {
  id: string;
  name: string;
}

export interface Assignment {
  id: string;
  client: Client;
  role: string;
}
