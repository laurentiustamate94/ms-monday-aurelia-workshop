import {Aurelia, Container} from "aurelia-framework";

export function configure(aurelia: Aurelia) {
    aurelia.use
        
        .standardConfiguration()
        .developmentLogging()
        .plugin("aurelia-validation", null);

    aurelia.start()
        .then(a => { a.setRoot("App/app"); });
}
