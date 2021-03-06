/**
 * Implement this interface if you want to create your own event.
 *
 * ```typescript
 * export class MessageEvent implements BotEvent
 * {
 *      public eventName: 'message';
 *
 *      public execute(msg): void
 *      {
 *          // Execute code here on message event
 *      }
 * }
 * ```
 * @category General
 */
export interface BotEvent
{
    /** Define here your event name, which has to be existent as Discord event in DiscordJS library. */
    eventName: string;

    /**
     * On eventLoad this code will be invoked by default. You can handle here your event.
     * @param {any} args Arguments which will be provided by Discord event
     */
    execute(...args: any | any[]): void;
}
