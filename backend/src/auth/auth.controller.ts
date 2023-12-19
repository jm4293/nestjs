import { Body, Controller, Get, Post, Req, Res, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserDTO } from "./dto/user.dto";
import { Request, Response } from "express";
import { AuthGuard } from "@nestjs/passport";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/register")
  async registerAccount(@Body() userDTO: UserDTO): Promise<any> {
    return await this.authService.registerNewUser(userDTO);
  }

  @Post("/login")
  async login(@Body() userDTO: UserDTO, @Res() res: Response): Promise<any> {
    const jwt = await this.authService.validateUser(userDTO);
    res.setHeader("Authorization", "Bearer" + jwt.accessToken);
    return res.json(jwt);

    // return await this.authService.validateUser(userDTO);
  }

  @Get("/authenticate")
  @UseGuards(AuthGuard())
  isAuthenticate(@Req() req: Request): any {
    const user: any = req.user;
    return user;
  }
}
