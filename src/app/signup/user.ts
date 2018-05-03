/**
 * Created by pg942665 on 02/05/18.
 */


export class UserModel {
  id: number;
  username: string;
  password: string;
  active: boolean;

  constructor () {
    this.username = '';
    this.password = '';
    this.active = true;
  }


}
