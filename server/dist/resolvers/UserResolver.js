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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const inputTypes_1 = require("../graph-utils/inputTypes");
const Types_1 = require("../graph-utils/Types");
let UserResolver = class UserResolver {
    constructor() {
        this.userCollection = [
            {
                userName: "vishnu",
                id: "1",
                followers: ["1"],
                email: "vishnu@gmail.com",
                posts: [
                    {
                        Title: "s",
                        Description: "sdf",
                    },
                ],
            },
            {
                userName: "new name",
                id: "2",
                followers: [],
                email: "new@gmail.com",
                posts: [
                    {
                        Title: "s",
                        Description: "sdf",
                    },
                ],
            },
        ];
    }
    users() {
        return this.userCollection;
    }
    followers(user) {
        var _a, _b;
        console.log((_a = user.followers) === null || _a === void 0 ? void 0 : _a.map((followerID) => this.userCollection.find((user) => user.id === followerID)));
        return (_b = user.followers) === null || _b === void 0 ? void 0 : _b.map((followerID) => this.userCollection.find((user) => user.id === followerID));
    }
    addUser({ email, userName }) {
        const newUSer = {
            userName,
            email,
            id: this.userCollection.length.toString(),
        };
        this.userCollection.push(newUSer);
        return newUSer;
    }
    ME(id) {
        return this.userCollection.find((user) => user.id == id);
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Types_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "users", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Types_1.User]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "followers", null);
__decorate([
    (0, type_graphql_1.Mutation)(),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputTypes_1.NewUserInput]),
    __metadata("design:returntype", Types_1.User)
], UserResolver.prototype, "addUser", null);
__decorate([
    (0, type_graphql_1.Query)(() => Types_1.User),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "ME", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => Types_1.User)
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=UserResolver.js.map