import { Body, Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserDTO } from "./dto/user.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/register")
  async registerAccount(@Body() userDTO: UserDTO): Promise<any> {
    return await this.authService.registerNewUser(userDTO);
  }

  @Post("/login")
  async login(@Body() userDTO: UserDTO): Promise<any> {
    return await this.authService.validateUser(userDTO);
  }
}
