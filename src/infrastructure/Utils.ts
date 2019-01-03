import { Constructor, Bundle } from '../../types/types';

export function bundler<T extends { [name: string]: Constructor }, P extends keyof T>(services: T){
	return (function Bundle(options?: any) {
		Object.entries(services || {}).forEach(([name, ser]) => {
			this[name] = new ser(options);
		});
	} as any) as Bundle<T, P>;
}