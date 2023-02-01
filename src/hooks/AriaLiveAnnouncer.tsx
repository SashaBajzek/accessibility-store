import * as React from "react";
import { VisuallyHidden } from "../accessible/VisuallyHidden/VisuallyHidden";

export type AriaLiveAnnouncer = {
  addMessage(message: string): void;
};

const AriaLiveAnnouncerContext = React.createContext<AriaLiveAnnouncer | null>(
  null
);

/**
 * Remove messages after 10 seconds after the last added message. The time
 * has to be long enough for the screenreader to read, but not so long that
 * the messages pile up if the person navigates to the region.
 */
const REMOVAL_TIME = 10 * 1000;

export function useAriaLiveAnnouncer(): AriaLiveAnnouncer {
  return React.useContext(AriaLiveAnnouncerContext)!;
}

export function AriaLiveAnnouncerProvider(props: React.PropsWithChildren<{}>) {
  const messageRef = React.useRef<HTMLDivElement>(null);

  const [announcer] = React.useState(() => {
    const scheduleClearMessage = () =>
      setTimeout(() => {
        if (messageRef.current) {
          messageRef.current.textContent = "";
        }
      }, REMOVAL_TIME);

    return {
      addMessage: (message: string) => {
        if (messageRef.current) {
          messageRef.current.appendChild(new Text(message));
          scheduleClearMessage();
        }
      },
    };
  });

  return (
    <AriaLiveAnnouncerContext.Provider value={announcer}>
      <VisuallyHidden>
        <div
          ref={messageRef}
          role="region"
          aria-live="polite"
          aria-relevant="additions text"
        ></div>
      </VisuallyHidden>
      {props.children}
    </AriaLiveAnnouncerContext.Provider>
  );
}
