export class EditUserRequest {
  fullName: string;
  emailAddress: string;
  deliveryAddress: string;
  phoneNumber: string;
  password: string;

  constructor(obj: EditUserRequest = {} as EditUserRequest) {
    Object.assign(this, obj);
  }

}
