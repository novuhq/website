import React from 'react';

import Button from 'components/shared/button/button';
import CodeTabs from 'components/shared/code-tabs/code-tabs';
import Heading from 'components/shared/heading/heading';
import LINKS from 'constants/links';

const TITLE = 'An infrastructure that speaks your language';
const DESCRIPTION = "Community built server-side SDK's for your preferred programming language";
const BUTTON_TEXT = 'Read Docs';
const SDK_BUTTON_TEXT = 'View SDKs';

const ITEMS = [
  {
    name: 'Node.js',
    language: 'javascript',
    code: `import { Novu } from '@novu/node';

const novu = new Novu(process.env.NOVU_API_KEY);

await novu.trigger('<WORKFLOW_TRIGGER_ID>',
  {
    to: {
      subscriberId: '<UNIQUE_SUBSCRIBER_IDENTIFIER>',
      email: 'john@doemail.com',
      firstName: 'John',
      lastName: 'Doe',
    },
    payload: {
      name: "Hello World",
      organization: {
        logo: 'https://happycorp.com/logo.png',
      },
    },
  }
);
  `,
  },
  {
    name: 'Ruby',
    language: 'ruby',
    code: `require 'novu';

client = Novu::Client.new('NOVU_API_KEY')

body = {
  name: "<WORKFLOW_TRIGGER_ID>",
  payload: {
    name: "Hello World",
    organization: {
      logo: "https://happycorp.com/logo.png",
    },
  },
  to: {
    firstName: "John",
    lastName: "Doe",
    email: "john@doemail.com",
    phone: "07983882199",
  },
}.to_json

client.trigger_event(body)
  `,
  },
  {
    name: 'Python',
    language: 'python',
    code: `from novu.api import EventApi

event_api = EventApi("https://api.novu.co/api/", "<NOVU_API_KEY>")
event_api.trigger(
    name="<WORKFLOW_TRIGGER_ID>",
    recipients="<YOUR_SUBSCRIBER_ID>",
    payload={
      'name': 'Hello World',
      'organization': {
        'logo': 'https://happycorp.com/logo.png'
      }
    },
)
  `,
  },
  {
    name: 'PHP',
    language: 'php',
    code: `use Novu\\SDK\\Novu;

$novu = new Novu(<NOVU_API_KEY>);

$novu->triggerEvent([
  'name' => '<WORKFLOW_TRIGGER_ID>',
  'payload' => [
    'name' => 'Hello World',
    'organization' => [
			'logo': 'https://happycorp.com/logo.png',
		],
  ],
  'to' => [
      'subscriberId' => '<UNIQUE_SUBSCRIBER_IDENTIFIER>',
      'phone' => '07983882186',
      'email' => 'john@doemail.com',
      'firstName' => 'John',
      'lastName'  => 'Doe',
  ]
]);
  `,
  },
  {
    name: 'KOTLIN',
    language: 'javascript',
    code: `import co.novu.Novu
import co.novu.extensions.subscribers
import co.novu.dto.request.TriggerEventRequest
import co.novu.dto.request.SubscriberRequest

fun main() {
    val novu = Novu(apiKey = "NOVU_API_KEY")

    novu.trigger(TriggerEventRequest.Companion.invoke
        ( 
            name = "<WORKFLOW_TRIGGER_ID>",
            to = SubscriberRequest(
                    subscriberId = "harry_potter"
                    firstName = "Harry",
                    lastName = "Potter",
                    phone = "97X98XX98X1",
                    email = "email@email.com",
                    loacal = "locale",
                    avatar = "avatar",
            ),
            payload = mapOf("name" to "Hello World")
        )
    )
} 
  `,
  },
  {
    name: 'Curl',
    language: 'bash',
    code: `curl -X POST
    -H "Content-Type: application/json"
    -H "Authorization: ApiKey REPLACE_WITH_API_KEY"
    -d '{
      "name": "<WORKFLOW_TRIGGER_ID>",
      "payload": {
        "name": "Hello World"
      },
      "to": {
        "subscriberId": "<UNIQUE_SUBSCRIBER_IDENTIFIER>",
        "email": "john@doemail.com",
        "firstName": "John",
        "lastName": "Doe",
      }
    }' 
  `,
  },
  {
    name: 'Go',
    language: 'go',
    code: `import (
      "context"
      "fmt"
      novu "github.com/novuhq/go-novu/lib"
      "log"
    )

subscriberID := "<UNIQUE_SUBSCRIBER_IDENTIFIER>"
apiKey := "<NOVU_API_KEY>"
eventId := "<WORKFLOW_TRIGGER_ID>"

ctx := context.Background()
to := map[string]interface{}{
  "lastName":     "Doe",
  "firstName":    "John",
  "subscriberId": subscriberID,
  "email":        "john@doemail.com",
}

payload := map[string]interface{}{
  "name": "Hello World",
  "organization": map[string]interface{}{
    "logo": "https://happycorp.com/logo.png",
  },
}

data := novu.ITriggerPayloadOptions{To: to, Payload: payload}
novuClient := novu.NewAPIClient(apiKey, &novu.Config{})

resp, err := novuClient.EventApi.Trigger(ctx, eventId, data)
if err != nil {
  log.Fatal("novu error", err.Error())
  return
}

fmt.Println(resp)
  `,
  },
  {
    name: '.NET',
    language: 'javascript',
    code: `using Novu.DTO;
using Novu.DTO.Topics;
using Novu.Models;
using Novu;

var novuConfiguration = new NovuClientConfiguration
{
    ApiKey = "<NOVU_API_KEY>",
};

var novu = new NovuClient(novuConfiguration);

public class OnboardEventPayload
{
  [JsonProperty("email")]
  public string Email { get; set; }

  [JsonProperty("firstName")]
  public string FirstName { get; set; }

  [JsonProperty("lastName")]
  public string LastName { get; set; }
}

var payload = new EventTriggerDataDto()
{
  EventName = "<WORKFLOW_TRIGGER_ID>",
  To = { SubscriberId = "<UNIQUE_SUBSCRIBER_IDENTIFIER>" },
  Payload = new OnboardingEventPayload
  {
    Email = "john@doemail.com",
    FirstName = "John"
    LastName  = "Doe"
  }
};

await novu.Event.Trigger(payload);
  `,
  },
];

const Languages = () => (
  <section className="languages safe-paddings bg-gray-2 pb-40 pt-30 lg:pb-32 lg:pt-24 md:pb-28 md:pt-18 sm:pb-18 sm:pt-12">
    <div className="container grid-gap-x grid grid-cols-12 items-center lg:flex lg:flex-col">
      <div className="col-start-1 col-end-8 w-full lg:order-2 lg:mt-12 sm:mt-8">
        <CodeTabs
          className="min-h-[560px] lg:mx-auto lg:w-full lg:max-w-[944px] md:mx-auto md:min-h-[482px] md:max-w-[712px] sm:min-h-[458px]"
          items={ITEMS}
        />
      </div>

      <div className="col-start-9 col-end-13 xl:col-start-8 lg:order-1 lg:text-center">
        <Heading size="xl" tag="h2" className="leading-tight md:text-4xl sm:text-3xl" theme="white">
          {TITLE}
        </Heading>
        <p className="mt-5 text-lg font-book leading-snug text-gray-9 md:mt-3 md:text-base">
          {DESCRIPTION}
        </p>
        <Button className="mt-7 md:mt-6" size="sm" theme="gray-outline" {...LINKS.libraries}>
          {SDK_BUTTON_TEXT}
        </Button>
        <Button
          className="ml-7 mt-7 md:mt-6"
          size="sm"
          theme="gray-outline"
          {...LINKS.documentation}
        >
          {BUTTON_TEXT}
        </Button>
      </div>
    </div>
  </section>
);

export default Languages;
