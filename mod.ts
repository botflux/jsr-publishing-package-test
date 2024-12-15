/**
 * Say hello to someone.
 * 
 * @module
 * 
 * @example 
 * Say hello to someone
 * ```typescript
 * import { hello } from "jsr:@botflux/package-publishing-test"
 * 
 * console.log(hello("John")) // Hello, John!
 * ```
 * 
 * @example
 * The name is capitalized
 * ```typescript
 * import { hello } from "jsr:@botflux/package-publishing-test"
 * 
 * console.log(hello("john")) // Hello, John!
 * ```
 * 
 * 
 * @param name the person you want to say hell to
 * @returns 
 */
export function hello(name: string): string {
    return `Hello, ${capitalized(name)}!`
}

function capitalized (str: string): string {
    const [ firstLetter, ...rest ] = str

    return [ firstLetter.toUpperCase(), ...rest ].join("")
}