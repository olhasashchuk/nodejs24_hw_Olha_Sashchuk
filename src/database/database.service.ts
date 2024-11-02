import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private client: MongoClient;
  private readonly logger = new Logger(DatabaseService.name);

  async onModuleInit() {
    const uri = `mongodb://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@localhost:${process.env.DATABASE_PORT}`;
    this.client = new MongoClient(uri);
    await this.connect();
  }

  async connect() {
    try {
      await this.client.connect();
      this.logger.log('Database connected');
      console.log();
    } catch (error) {
      this.logger.log('Database connection error:', error);
    }
  }

  getClient() {
    return this.client;
  }
}