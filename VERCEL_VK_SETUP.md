# VK notifications on Vercel

## Vercel environment variables

Add these variables in Vercel project settings:

```text
VK_GROUP_TOKEN=<new VK community token>
NOTIFY_CLIENT_KEY=<random test key>
```

`VK_GROUP_TOKEN` must be stored only in Vercel. Do not put it into `app.js`.

`NOTIFY_CLIENT_KEY` is optional, but recommended. If it is set, the frontend must send
the same value as `window.TECH_SERVICE_NOTIFY_KEY`.

## Frontend endpoint

When the app is opened on Vercel, it automatically sends notifications to:

```text
/api/notify
```

When the app is opened from GitHub Pages, set this before `app.js` loads:

```html
<script>
  window.TECH_SERVICE_NOTIFY_ENDPOINT = "https://<your-vercel-project>.vercel.app/api/notify";
  window.TECH_SERVICE_NOTIFY_KEY = "<same value as NOTIFY_CLIENT_KEY>";
</script>
```

## Test recipients

Current test map:

```text
Кристина Анастасова -> burevestnitsaa
Анна Алыбина -> annagarden
Александр Скорняков -> 33300714
Сергей Чирков -> 16504601
Станислав Чемякин -> mergyn
Андрей Радаев -> oriaplanet
```

VK can send a private message only if the user allowed messages from the community
or wrote to the community first.

## Events

- New ticket: message to Александр Скорняков and the assigned executor if configured.
- Ticket moved to work: message to the requester if configured.
- Ticket closed: message to the requester if configured.
