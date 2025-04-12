import { ojMessage } from "ojs/ojmessage";
import "ojs/ojmessages";
import { ojMessages } from "ojs/ojmessages";
import { useCallback, useState } from "preact/hooks";
export function Home() {
  const [messages, setmessages] = useState<ojMessage.Message[]>([]);
  const [display, setdisplay] = useState<"notification" | "general">("notification");
  const isoTimeNow = new Date().toISOString();
  const position: ojMessages.Position = {
    at: {
      horizontal: "end",
      vertical: "top",
    },
    my: {
      horizontal: "start",
      vertical: "top",
    },
    collision: "flipfit",
  };
  const onClickListner = () => {
    setdisplay(display === "notification" ? "general" : "notification");
    setmessages([
      {
        severity: "warning",
        summary: "Error",
        detail: "Error Message- detail",
        autoTimeout: 1500,
        timestamp: isoTimeNow,
        icon: "./styles/images/avatar_24px.png",
      },
    ]);
  };
  const renderMessage = useCallback((item: ojMessages.MessageTemplateContext) => {
    return (
      <oj-message message={item.data} class="oj-color-invert">
        <div slot="detail" class="oj-flex oj-sm-flex-direction-column">
          <span class="oj-text-color-secondary oj-typography-body-sm">{item.data.detail}</span>
        </div>
      </oj-message>
    );
  }, []);

  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      <h1>Home Page</h1>
      <oj-button onClick={onClickListner}>oj-messages</oj-button>
      <oj-messages id="messgaeid" messages={messages} position={position} display={display}>
        <template slot="messageTemplate" render={renderMessage}></template>
      </oj-messages>
      <div class="oj-md-odd-cols-2 oj-md-even-cols-4">
      <div class="oj-flex ">
        <div class="oj-flex-item  "> 
          <div class="oj-panel">
            <h2>Ch1</h2>
            <ol>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ol>
          </div>
        </div>
        <div class="oj-flex-item  ">
        <div class="oj-panel">
            <h2>Ch2</h2>
            <ol>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ol>
          </div> </div>
        <div class="oj-flex-item  " > 
        <div class="oj-panel">
            <h2>Ch3</h2>
            <ol>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ol>
          </div>
        </div>
        <div class="oj-flex-item  " > 
        <div class="oj-panel">
            <h2>Ch4</h2>
            <ol>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ol>
          </div>
        </div>
      </div>
      </div>

     
     
    </div>
  );
}
