"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author David Zarandi (Azuwey)
 */
require("reflect-metadata");
var misc_1 = require("../misc");
function EventListenerDecorator(eventName) {
    return function (target, propertyKey, descriptor) {
        if (descriptor.value) {
            var constructor_1 = Reflect.getMetadata(misc_1.CONSTRUCTOR_KEY, target.constructor);
            var eventDispatcher_1 = Reflect.getMetadata(misc_1.EVENT_DISPATCHER_KEY, target.constructor);
            (!constructor_1 || !eventDispatcher_1) && (function () {
                var _constructor = target.constructor;
                constructor_1 = new _constructor;
                eventDispatcher_1 = misc_1.EventDispatcher.getInstance();
                Reflect.defineMetadata(misc_1.CONSTRUCTOR_KEY, constructor_1, _constructor);
                Reflect.defineMetadata(misc_1.EVENT_DISPATCHER_KEY, eventDispatcher_1, _constructor);
            })();
            eventDispatcher_1.add(eventName, descriptor.value.bind(constructor_1));
        }
        else {
            throw new Error('There is no descriptor');
        }
    };
}
exports.EventListenerDecorator = EventListenerDecorator;
//# sourceMappingURL=eventListener.decorator.js.map