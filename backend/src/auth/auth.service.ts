import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDTO } from "./dto/user.dto";

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async registerNewUser(newUser: UserDTO): Promise<UserDTO> {
    const userFind: UserDTO = await this.userService.findByFields({
      where: { username: newUser.username },
    });

    if (userFind) {
      throw new HttpException("Username already used!", HttpStatus.BAD_REQUEST);
    }
    return this.userService.save(newUser);
  }

  async validateUser(UserDTO: UserDTO): Promise<UserDTO | undefined> {
    const userFind: UserDTO = await this.userService.findByFields({
      where: { username: UserDTO.username },
    });

    if (!userFind || UserDTO.password !== userFind.password) {
      throw new UnauthorizedException();
    }
    return userFind;
  }
}
