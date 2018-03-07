export interface IEventDispatcher {
	add(eventName: string, eventCallback: Function): void;
	emit(eventName: string, ...args: any[]): void;
}