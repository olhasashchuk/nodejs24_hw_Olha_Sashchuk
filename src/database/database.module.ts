import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service'; // Импортируем сервис базы данных

@Module({
  providers: [DatabaseService], // Указываем сервис в провайдерах
  exports: [DatabaseService], // Экспортируем сервис, чтобы он был доступен в других модулях
})
export class DatabaseModule {}
