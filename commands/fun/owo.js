/**
 * Created by julia on 04.01.2017.
 */
let RRACommand = require('../../structures/rraCommand');
class OWOImage extends RRACommand {
    constructor({t}) {
        super();
        this.cmd = "owo";
        this.cat = "fun";
        this.needGuild = false;
        this.t = t;
        this.accessLevel = 0;
    }
}
module.exports = OWOImage;
