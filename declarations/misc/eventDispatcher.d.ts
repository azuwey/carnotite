/**
 * @author David Zarandi (Azuwey)
 */
import { IEventDispatcher } from '../';
export declare class EventDispatcher implements IEventDispatcher {
    private static _instance;
    private _events;
    private constructor();
    add(eventName: string, eventCallback: Function): void;
    emit(eventName: string, ...args: any[]): void;
    static getInstance(): EventDispatcher;
}
