export interface ILoginInput {
  name: 'EmailOrUsername' | 'password';
  placeholder: string;
  type: string;
  validation: {
    required?: boolean;
    minLength?: number;
  };
}

export interface IRegisterInput {
  name: 'email' | 'username' | 'password';
  placeholder: string;
  type: string;
  validation: {
    required?: boolean;
    minLength?: number;
    pattern?: RegExp;
  };
}

export interface IErrorResponse {
  message: string;
}