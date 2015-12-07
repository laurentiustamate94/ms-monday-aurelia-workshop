import {Aurelia, Container} from "aurelia-framework";

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    aurelia.start()
        .then(a => { a.setRoot("App/app"); });
}
