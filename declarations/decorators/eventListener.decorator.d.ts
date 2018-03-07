/**
 * @author David Zarandi (Azuwey)
 */
import 'reflect-metadata';
export declare function EventListenerDecorator(eventName: string): (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => void>) => void;
