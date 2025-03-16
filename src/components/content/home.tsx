import "ojs/ojinputtext";
import { ojMessage } from "ojs/ojmessage";
import "ojs/ojmessages";
import { ojMessages } from "ojs/ojmessages";
import { useCallback, useState } from "preact/hooks";

export function Home() {
        const isoTimeNow = new Date().toISOString();
        const [Message, setMessage] = useState<ojMessage.Message[]>([]);

        const position: ojMessages.Position = {
                at: {
                        horizontal: "end",
                        vertical: "top",
                },
                my: {
                        horizontal: "end",
                        vertical: "top",
                },               
                 collision: 'flipfit'
        };

        const handleClick = () => {
                setMessage([
                        {
                                severity: "error",
                                summary: "Error message summary",
                                detail: "Error message detail",
                                timestamp: isoTimeNow,
                                sound: "default",
                                autoTimeout: 1000,
                                icon: "./styles/images/JET-Favicon-Red-32x32.png",
                        },
                ]);
        };

        const renderListItem = useCallback(
          (item: ojMessages.MessageTemplateContext) => {
            return (
              <oj-message              
              message={item.data}            
              class="oj-color-invert">
                <div slot="detail" class="oj-flex oj-sm-flex-direction-column">
                  <span class="oj-text-color-secondary oj-typography-body-sm">
                    {item.data.detail}
                  </span>
                </div>
              </oj-message>
            );
          },
          []
        );

        return (
                <div class="oj-web-applayout-max-width oj-web-applayout-content">
                        <h1>Home Page</h1>
                        <oj-button id="button" onClick={handleClick}>
                                message-notification
                        </oj-button>
                        <oj-messages id="message" messages={Message} position={position} display="notification"
                       >
                        <template slot="messageTemplate" render={renderListItem}>
                        
                        </template>
                       </oj-messages>
                </div>
        );
}
