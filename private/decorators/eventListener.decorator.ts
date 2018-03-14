/**
 * @author David Zarandi (Azuwey)
 */

import 'reflect-metadata';

import { CONSTRUCTOR_KEY, EVENT_DISPATCHER_KEY, EventDispatcher } from '../misc';

export function EventListenerDecorator(eventName: string) {
	return (
		target: Object,
		propertyKey: string,
		descriptor: TypedPropertyDescriptor<(...args: any[]) => void>
	) => {
		if (descriptor.value) {
			let constructor: Function | undefined =
				Reflect.getMetadata(CONSTRUCTOR_KEY, target.constructor);
			let eventDispatcher: EventDispatcher | undefined =
				Reflect.getMetadata(EVENT_DISPATCHER_KEY, target.constructor);
			(!constructor || !eventDispatcher) && (() => {
				let _constructor = target.constructor;
				constructor = new (<any>_constructor);
				eventDispatcher = EventDispatcher.getInstance();
				Reflect.defineMetadata(CONSTRUCTOR_KEY, constructor, _constructor);
				Reflect.defineMetadata(EVENT_DISPATCHER_KEY, eventDispatcher, _constructor);
			})();
			eventDispatcher.add(eventName, descriptor.value.bind(constructor));
		} else {
			throw new Error('There is no descriptor');
		}
	}
}