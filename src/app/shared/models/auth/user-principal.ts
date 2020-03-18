import {User} from './user';

export class UserPrincipal {
  theUser: User;
  authorities: Authority[];
}

export class Authority {
  authority: string;

  constructor(authority: string) {
    this.authority = authority;
  }
}
