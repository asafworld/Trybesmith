import { Pool } from 'mysql2/promise';
// import { ResultSetHeader } from 'mysql2';
import { Login, Answer } from '../Interfaces/Login.interface';
import { RegisteredUser } from '../Interfaces/Users.interface';

const wrongField: Answer = {
  success: false,
  status: 401,
  message: 'Username or password invalid',
  id: null,
};

const rightFields: Answer = {
  success: true,
  status: 200,
  message: 'Correct fields',
  id: null,
};

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async login({ username, password }: Login): Promise<Answer > {
    const userCheck = await this.connection
      .execute(
        'SELECT * FROM Trybesmith.Users WHERE username = ?;',
        [username],
      );    
    const [data] = userCheck;
    const [user] = data as RegisteredUser[];
    if (!userCheck || !user) {
      return wrongField;
    }
    if (user.password !== password) {
      return wrongField;
    }
    return { success: rightFields.success,
      status: rightFields.status,
      message: rightFields.message,
      id: user.id, 
    };
  }
}