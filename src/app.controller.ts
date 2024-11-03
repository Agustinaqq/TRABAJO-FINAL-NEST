import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("agus")
export class AppController {
  constructor(private readonly appService: AppService) {
    
  }

  @Get ()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postHello(): string {
    return this.appService.postHello();
  }
  
  @Put()
  putHello(): string {
    return this.appService.putHello();
  }

  @Post()
    crearProduct() {
        return this.productService.crearProducts();
    }
}