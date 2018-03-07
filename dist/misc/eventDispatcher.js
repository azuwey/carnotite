"use strict";
/**
 * @author David Zarandi (Azuwey)
 */
Object.defineProperty(exports, "__esModule", { value: true });
var EventDispatcher = /** @class */ (function () {
    function EventDispatcher() {
        this._events = new Map();
        if (EventDispatcher._instance) {
            throw new Error('Instantiation failed: Use EventDispatcher.getInstance() instead of new.');
        }
        else {
            EventDispatcher._instance = this;
        }
    }
    EventDispatcher.prototype.add = function (eventName, eventCallback) {
        if (!this._events.has(eventName)) {
            this._events.set(eventName, eventCallback);
        }
        else {
            throw new Error('This event name already used in the event handler list');
        }
    };
    EventDispatcher.prototype.emit = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var callback = this._events.get(eventName);
        if (callback) {
            callback.apply(void 0, args);
        }
        else {
            throw new Error('This event name is not registered in the event handler list');
        }
    };
    EventDispatcher.getInstance = function () {
        if (EventDispatcher._instance) {
            return EventDispatcher._instance;
        }
        else {
            return new EventDispatcher();
        }
    };
    return EventDispatcher;
}());
exports.EventDispatcher = EventDispatcher;
//# sourceMappingURL=eventDispatcher.js.map