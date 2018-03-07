"use strict";
/**
 * @author David Zarandi (Azuwey)
 */
Object.defineProperty(exports, "__esModule", { value: true });
var misc_1 = require("../misc");
function EventDispatcherDecorator(target, propertyKey) {
    Object.defineProperty(target, propertyKey, {
        value: misc_1.EventDispatcher.getInstance()
    });
}
exports.EventDispatcherDecorator = EventDispatcherDecorator;
//# sourceMappingURL=eventDispatcher.decorator.js.map