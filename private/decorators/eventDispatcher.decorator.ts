/**
 * @author David Zarandi (Azuwey)
 */

import { EventDispatcher as Event } from '../misc';

export function EventDispatcherDecorator(
	target: Object,
	propertyKey: string | symbol
) {
	Object.defineProperty(target, propertyKey, {
		value: Event.getInstance()
	});
}