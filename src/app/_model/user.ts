export interface User {
  id: number;
  photo: Blob;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  token: string;
}
