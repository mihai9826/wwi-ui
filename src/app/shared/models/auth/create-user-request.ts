export class CreateUserRequest {
  fullName: string;
  emailAddress: string;
  deliveryAddress: string;
  phoneNumber: string;
  password: string;
  role: string;

  constructor(obj: CreateUserRequest = {} as CreateUserRequest) {
    Object.assign(this, obj);
  }
}
