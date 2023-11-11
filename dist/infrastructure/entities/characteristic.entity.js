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
exports.Characteristics = void 0;
const typeorm_1 = require("typeorm");
const animal_entity_1 = require("./animal.entity");
let Characteristics = class Characteristics {
};
exports.Characteristics = Characteristics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer' }),
    __metadata("design:type", Number)
], Characteristics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ array: true }),
    __metadata("design:type", String)
], Characteristics.prototype, "food", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100 }),
    __metadata("design:type", String)
], Characteristics.prototype, "colour", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean'),
    __metadata("design:type", Boolean)
], Characteristics.prototype, "isDangerous", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { precision: 4, scale: 0 }),
    __metadata("design:type", Number)
], Characteristics.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100 }),
    __metadata("design:type", String)
], Characteristics.prototype, "enclosure", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => animal_entity_1.Animal, (animal) => animal.characteristics),
    __metadata("design:type", animal_entity_1.Animal)
], Characteristics.prototype, "animal", void 0);
exports.Characteristics = Characteristics = __decorate([
    (0, typeorm_1.Entity)()
], Characteristics);
//# sourceMappingURL=characteristic.entity.js.map