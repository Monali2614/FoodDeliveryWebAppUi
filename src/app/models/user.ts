export class User {
  constructor(
    public name: string = '',
    public username: string = '',
    public gender: string = '',
    public email: string = '',
    public address: string = '',
    public password: string = '',
    public confirmPassword: string = ''
  ) {}
}
