import {ensure, Validation, ValidationGroup} from "aurelia-validation";
import {Container} from "aurelia-framework";

export class App {

    validation: ValidationGroup;

    @ensure((elem: ValidationGroup) => {
        elem
            .isNotEmpty()
            .hasLengthBetween(3, 50)
            .containsOnlyAlphaOrWhitespace()
    }) companyName: string;

    @ensure((elem: ValidationGroup) => {
        elem
            .isNotEmpty()
            .isEmail()
    }) email: string;

    constructor() {
        this.validation = Container.instance.get(Validation).on(this,null);
    }

    register() {
        //debugger;
        this.validation.validate()
            .then((value) => {

                alert("Yeei !! Everything is great ^_^");

            }, (reason) => {
                // TODO Say explicitly what went wrong
            });
    }
}
