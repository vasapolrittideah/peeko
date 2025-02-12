import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { User, PrismaClient } from '@repo/database';

import { Expose } from './prisma.interface';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  /* Delete sensitive keys from an object */
  expose<T>(item: T): Expose<T> {
    if (!item) return {} as T;
    if ((item as any as Partial<User>).passwordHash) {
      (item as any).hasPassword = true;
    }
    delete (item as any as Partial<User>).passwordHash;
    return item;
  }
}
