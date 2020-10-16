"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrphanages1602600228959 = void 0;
const typeorm_1 = require("typeorm");
class CreateOrphanages1602600228959 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'orphanages',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'latitude',
                    type: 'varchar',
                },
                {
                    name: 'longitude',
                    type: 'varchar',
                },
                {
                    name: 'about',
                    type: 'text',
                },
                {
                    name: 'instructions',
                    type: 'text',
                },
                {
                    name: 'opening_hours',
                    type: 'text',
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false,
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropDatabase('orphanages');
    }
}
exports.CreateOrphanages1602600228959 = CreateOrphanages1602600228959;
