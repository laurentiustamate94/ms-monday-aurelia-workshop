var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", "aurelia-validation", "aurelia-framework"], function (require, exports, aurelia_validation_1, aurelia_framework_1) {
    var App = (function () {
        function App() {
            this.validation = aurelia_framework_1.Container.instance.get(aurelia_validation_1.Validation).on(this, null);
        }
        App.prototype.register = function () {
            //debugger;
            this.validation.validate()
                .then(function (value) {
                alert("Yeei !! Everything is great ^_^");
            }, function (reason) {
                // TODO Say explicitly what went wrong
            });
        };
        __decorate([
            aurelia_validation_1.ensure(function (elem) {
                elem
                    .isNotEmpty()
                    .hasLengthBetween(3, 50)
                    .containsOnlyAlphaOrWhitespace();
            })
        ], App.prototype, "companyName");
        __decorate([
            aurelia_validation_1.ensure(function (elem) {
                elem
                    .isNotEmpty()
                    .isEmail();
            })
        ], App.prototype, "email");
        return App;
    })();
    exports.App = App;
});
//# sourceMappingURL=app.js.map