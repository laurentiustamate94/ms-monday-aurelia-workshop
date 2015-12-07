define(["require", "exports"], function (require, exports) {
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging();
        aurelia.start()
            .then(function (a) { a.setRoot("App/app"); });
    }
    exports.configure = configure;
});
//# sourceMappingURL=main.js.map