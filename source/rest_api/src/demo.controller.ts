import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { Response } from "express";
import * as fs from "fs";

@Controller("demo")
export class DemoController{
  @Get()
  async demo(@Body() req: any, @Res() res: Response) {
    res.send("Oi!");
  }
}
