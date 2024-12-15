/**
 * Say hello to someone.
 * 
 * @module
 * 
 * @example ```typescript
 * import { hello } from "jsr:@botflux/package-publishing-test"
 * 
 * console.log(hello("John")) // Hello, John!
 * ```
 * 
 * @param name the person you want to say hell to
 * @returns 
 */
export function hello(name: string): string {
    return `Hello, ${name}!`
}