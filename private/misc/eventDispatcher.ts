/**
 * @author David Zarandi (Azuwey)
 */

import { IEventDispatcher } from '../';

export class EventDispatcher implements IEventDispatcher {
	private static _instance: EventDispatcher;
	private _events: Map<string, Function> = new Map();

	private constructor() {
		if (EventDispatcher._instance) {
			throw new Error('Instantiation failed: Use EventDispatcher.getInstance() instead of new.');
		} else {
			EventDispatcher._instance = this;
		}
	}

	public add(
		eventName: string,
		eventCallback: Function
	): void {
		if (!this._events.has(eventName)) {
			this._events.set(eventName, eventCallback);
		} else {
			throw new Error('This event name already used in the event handler list');
		}
	}

	public emit(
		eventName: string,
		...args: any[]
	): void {
		let callback: Function | undefined = this._events.get(eventName);
		if (callback) {
			callback(...args);
		} else {
			throw new Error('This event name is not registered in the event handler list');
		}
	}

	public static getInstance(): EventDispatcher {
		if (EventDispatcher._instance) {
			return EventDispatcher._instance;
		} else {
			return new EventDispatcher();
		}
	}
}