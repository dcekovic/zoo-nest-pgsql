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
exports.Animal = void 0;
const typeorm_1 = require("typeorm");
const characteristic_entity_1 = require("./characteristic.entity");
const zookeeper_entity_1 = require("./zookeeper.entity");
let Animal = class Animal {
};
exports.Animal = Animal;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer' }),
    __metadata("design:type", Number)
], Animal.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255 }),
    __metadata("design:type", String)
], Animal.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100 }),
    __metadata("design:type", String)
], Animal.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { precision: 3, scale: 0 }),
    __metadata("design:type", Number)
], Animal.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100 }),
    __metadata("design:type", String)
], Animal.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 2 }),
    __metadata("design:type", String)
], Animal.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => characteristic_entity_1.Characteristics, (characteristic) => characteristic.animal),
    __metadata("design:type", Array)
], Animal.prototype, "characteristics", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => zookeeper_entity_1.Zookeeper, (zookeeper) => zookeeper.animal),
    __metadata("design:type", zookeeper_entity_1.Zookeeper)
], Animal.prototype, "zookeeper", void 0);
exports.Animal = Animal = __decorate([
    (0, typeorm_1.Entity)()
], Animal);
//# sourceMappingURL=animal.entity.js.map