"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author David Zarandi (Azuwey)
 */
require("reflect-metadata");
var misc_1 = require("../misc");
function EventDispatcherDecorator(target, propertyKey) {
    Object.defineProperty(target, propertyKey, {
        value: misc_1.EventDispatcher.getInstance()
    });
}
exports.EventDispatcherDecorator = EventDispatcherDecorator;
//# sourceMappingURL=eventDispatcher.decorator.js.map