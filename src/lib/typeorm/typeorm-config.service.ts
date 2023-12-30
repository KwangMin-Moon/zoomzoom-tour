import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  private readonly ENTITY_LOCATION = "dist/src/modules/**/*.entity.{js, d.ts}";

  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const mysqlOption: MysqlConnectionOptions = {
      type: "mysql",
      host: this.configService.get<string>("DB_HOST"),
      port: this.configService.get<number>("DB_PORT"),
      username: this.configService.get<string>("DB_USERNAME"),
      password: this.configService.get<string>("DB_PASSWORD"),
      database: this.configService.get<string>("DB_DATABASE"),
      charset: "utf8mb4_general_ci",
    };

    return {
      ...mysqlOption,
      entities: [this.ENTITY_LOCATION],
      synchronize: this.configService.get<boolean>("DB_SYNCHRONIZE"),
    };
  }
}
