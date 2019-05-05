
/* TYPES */

//TODO: These shouldn't be here, we should delete these once they are defined by TypeScript itself

type RequestIdleCallbackDeadline = {
  readonly didTimeout: boolean,
  timeRemaining: () => number
};

type RequestIdleCallbackOptions = {
  timeout: number
};

declare function requestIdleCallback ( callback: ( deadline: RequestIdleCallbackDeadline ) => void, options?: RequestIdleCallbackOptions ): number;
declare function cancelIdleCallback ( handle: number ): void;
