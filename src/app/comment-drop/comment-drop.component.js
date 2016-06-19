"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var list_1 = require('@angular2-material/list');
var input_1 = require('@angular2-material/input');
var CommentDropComponent = (function () {
    function CommentDropComponent() {
        this.comments = [
            { text: "comment 1" }, { text: "comment 2" }, { text: "comment 3" }
        ];
    }
    CommentDropComponent.prototype.ngOnInit = function () {
    };
    CommentDropComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'comment-sec',
            templateUrl: 'comment-drop.component.html',
            styleUrls: ['comment-drop.component.css'],
            directives: [list_1.MD_LIST_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES]
        })
    ], CommentDropComponent);
    return CommentDropComponent;
}());
exports.CommentDropComponent = CommentDropComponent;
//# sourceMappingURL=comment-drop.component.js.map