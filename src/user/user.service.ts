import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly users = [
    {
      userId: 1,
      username: '张三',
      password: '111111',
    },
    {
      userId: 2,
      username: '李四',
      password: '111111',
    },
  ];

  async findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
