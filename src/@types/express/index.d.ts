declare namespace Express {
  export interface Request {
    User: {
      id: string;
      email: string;
    };
  }
}