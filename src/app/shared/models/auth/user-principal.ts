import {User} from './user';

export class UserPrincipal {
  user: User;
  authorities: Authority[];
}

export class Authority {
  authority: string;

  constructor(authority: string) {
    this.authority = authority;
  }
}
