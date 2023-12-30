import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { TourModule } from "./modules/tour/tour.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfigService } from "./lib/typeorm/typeorm-config.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [".env"],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    TourModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
