"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zookeeper = void 0;
const typeorm_1 = require("typeorm");
const animal_entity_1 = require("./animal.entity");
let Zookeeper = class Zookeeper {
};
exports.Zookeeper = Zookeeper;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer' }),
    __metadata("design:type", Number)
], Zookeeper.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255 }),
    __metadata("design:type", String)
], Zookeeper.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { precision: 3, scale: 0 }),
    __metadata("design:type", Number)
], Zookeeper.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255 }),
    __metadata("design:type", String)
], Zookeeper.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean'),
    __metadata("design:type", Boolean)
], Zookeeper.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => animal_entity_1.Animal, (animal) => animal.zookeeper),
    __metadata("design:type", Array)
], Zookeeper.prototype, "animal", void 0);
exports.Zookeeper = Zookeeper = __decorate([
    (0, typeorm_1.Entity)()
], Zookeeper);
//# sourceMappingURL=zookeeper.entity.js.map