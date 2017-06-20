# Analytics.js

Analytics.js makes it easy to collect customer data and send it to many different tools using a single, unified API.

Analytics.js is open source and is one of the libraries that powers [Segment], the managed, hassle-free way to collect customer data in the browser and beyond.

For our mobile and server-side data collection libraries, check out our [libraries] page.

## Documentation

First, read the [Analytics.js QuickStart], which contains installation instructions and a brief overview of what Analytics.js does and how it works.

For more detail on the Analytics.js API, check out the [Analytics.js Library Reference].


## Contributing

This repository houses a pre-built, open-source version of analytics.js. The core logic of analytics.js is broken out into individual repositories:

- To report an issue with analytics.js itself, head over to [analytics.js-core][], where the core analytics.js logic is maintained.
- To report an issue with an integration. head over to the [analytics.js-integrations][] organization, where we keep each integration in its own repository.

If you're not sure where to open an issue, feel free to open an issue against this repository or email <friends@segment.com> and we'll help point you in the right direction.

## License

Released under the [MIT license].

## Other adapter library

./package.json
```  
  "dependencies": {
    "@segment/analytics.js-integration-adroll": "git+https://github.com/segment-integrations/analytics.js-integration-adroll.git",
    "@segment/analytics.js-integration-adwords": "git+https://github.com/segment-integrations/analytics.js-integration-adwords.git",
    "@segment/analytics.js-integration-alexa": "git+https://github.com/segment-integrations/analytics.js-integration-alexa.git",
    "@segment/analytics.js-integration-amplitude": "git+https://github.com/segment-integrations/analytics.js-integration-amplitude.git",
    "@segment/analytics.js-integration-appcues": "git+https://github.com/segment-integrations/analytics.js-integration-appcues.git",
    "@segment/analytics.js-integration-atatus": "git+https://github.com/segment-integrations/analytics.js-integration-atatus.git",
    "@segment/analytics.js-integration-autosend": "git+https://github.com/segment-integrations/analytics.js-integration-autosend.git",
    "@segment/analytics.js-integration-awesm": "git+https://github.com/segment-integrations/analytics.js-integration-awesm.git",
    "@segment/analytics.js-integration-bing-ads": "git+https://github.com/segment-integrations/analytics.js-integration-bing-ads.git",
    "@segment/analytics.js-integration-blueshift": "git+https://github.com/segment-integrations/analytics.js-integration-blueshift.git",
    "@segment/analytics.js-integration-boomtrain": "git+https://github.com/segment-integrations/analytics.js-integration-boomtrain.git",
    "@segment/analytics.js-integration-bronto": "git+https://github.com/segment-integrations/analytics.js-integration-bronto.git",
    "@segment/analytics.js-integration-bugherd": "git+https://github.com/segment-integrations/analytics.js-integration-bugherd.git",
    "@segment/analytics.js-integration-bugsnag": "git+https://github.com/segment-integrations/analytics.js-integration-bugsnag.git",
    "@segment/analytics.js-integration-chameleon": "git+https://github.com/segment-integrations/analytics.js-integration-chameleon.git",
    "@segment/analytics.js-integration-chartbeat": "git+https://github.com/segment-integrations/analytics.js-integration-chartbeat.git",
    "@segment/analytics.js-integration-clicky": "git+https://github.com/segment-integrations/analytics.js-integration-clicky.git",
    "@segment/analytics.js-integration-comscore": "git+https://github.com/segment-integrations/analytics.js-integration-comscore.git",
    "@segment/analytics.js-integration-crazy-egg": "git+https://github.com/segment-integrations/analytics.js-integration-crazy-egg.git",
    "@segment/analytics.js-integration-curebit": "git+https://github.com/segment-integrations/analytics.js-integration-curebit.git",
    "@segment/analytics.js-integration-customerio": "git+https://github.com/segment-integrations/analytics.js-integration-customerio.git",
    "@segment/analytics.js-integration-drift": "git+https://github.com/segment-integrations/analytics.js-integration-drift.git",
    "@segment/analytics.js-integration-drip": "git+https://github.com/segment-integrations/analytics.js-integration-drip.git",
    "@segment/analytics.js-integration-elevio": "git+https://github.com/segment-integrations/analytics.js-integration-elevio.git",
    "@segment/analytics.js-integration-errorception": "git+https://github.com/segment-integrations/analytics.js-integration-errorception.git",
    "@segment/analytics.js-integration-evergage": "git+https://github.com/segment-integrations/analytics.js-integration-evergage.git",
    "@segment/analytics.js-integration-extole": "git+https://github.com/segment-integrations/analytics.js-integration-extole.git",
    "@segment/analytics.js-integration-facebook-conversion-tracking": "git+https://github.com/segment-integrations/analytics.js-integration-facebook-conversion-tracking.git",
    "@segment/analytics.js-integration-facebook-custom-audiences": "git+https://github.com/segment-integrations/analytics.js-integration-facebook-custom-audiences.git",
    "@segment/analytics.js-integration-facebook-pixel": "git+https://github.com/segment-integrations/analytics.js-integration-facebook-pixel.git",
    "@segment/analytics.js-integration-foxmetrics": "git+https://github.com/segment-integrations/analytics.js-integration-foxmetrics.git",
    "@segment/analytics.js-integration-frontleaf": "git+https://github.com/segment-integrations/analytics.js-integration-frontleaf.git",
    "@segment/analytics.js-integration-gauges": "git+https://github.com/segment-integrations/analytics.js-integration-gauges.git",
    "@segment/analytics.js-integration-get-satisfaction": "git+https://github.com/segment-integrations/analytics.js-integration-get-satisfaction.git",
    "@segment/analytics.js-integration-google-tag-manager": "git+https://github.com/segment-integrations/analytics.js-integration-google-tag-manager.git",
    "@segment/analytics.js-integration-gosquared": "git+https://github.com/segment-integrations/analytics.js-integration-gosquared.git",
    "@segment/analytics.js-integration-heap": "git+https://github.com/segment-integrations/analytics.js-integration-heap.git",
    "@segment/analytics.js-integration-hellobar": "git+https://github.com/segment-integrations/analytics.js-integration-hellobar.git",
    "@segment/analytics.js-integration-hittail": "git+https://github.com/segment-integrations/analytics.js-integration-hittail.git",
    "@segment/analytics.js-integration-hubspot": "git+https://github.com/segment-integrations/analytics.js-integration-hubspot.git",
    "@segment/analytics.js-integration-improvely": "git+https://github.com/segment-integrations/analytics.js-integration-improvely.git",
    "@segment/analytics.js-integration-inspectlet": "git+https://github.com/segment-integrations/analytics.js-integration-inspectlet.git",
    "@segment/analytics.js-integration-intercom": "git+https://github.com/segment-integrations/analytics.js-integration-intercom.git",
    "@segment/analytics.js-integration-keen-io": "git+https://github.com/segment-integrations/analytics.js-integration-keen-io.git",
    "@segment/analytics.js-integration-kenshoo": "git+https://github.com/segment-integrations/analytics.js-integration-kenshoo.git",
    "@segment/analytics.js-integration-kissmetrics": "git+https://github.com/segment-integrations/analytics.js-integration-kissmetrics.git",
    "@segment/analytics.js-integration-klaviyo": "git+https://github.com/segment-integrations/analytics.js-integration-klaviyo.git",
    "@segment/analytics.js-integration-livechat": "git+https://github.com/segment-integrations/analytics.js-integration-livechat.git",
    "@segment/analytics.js-integration-lucky-orange": "git+https://github.com/segment-integrations/analytics.js-integration-lucky-orange.git",
    "@segment/analytics.js-integration-lytics": "git+https://github.com/segment-integrations/analytics.js-integration-lytics.git",
    "@segment/analytics.js-integration-madkudu": "git+https://github.com/segment-integrations/analytics.js-integration-madkudu.git",
    "@segment/analytics.js-integration-mixpanel": "git+https://github.com/segment-integrations/analytics.js-integration-mixpanel.git",
    "@segment/analytics.js-integration-mojn": "git+https://github.com/segment-integrations/analytics.js-integration-mojn.git",
    "@segment/analytics.js-integration-mouseflow": "git+https://github.com/segment-integrations/analytics.js-integration-mouseflow.git",
    "@segment/analytics.js-integration-mousestats": "git+https://github.com/segment-integrations/analytics.js-integration-mousestats.git",
    "@segment/analytics.js-integration-navilytics": "git+https://github.com/segment-integrations/analytics.js-integration-navilytics.git",
    "@segment/analytics.js-integration-nudgespot": "git+https://github.com/segment-integrations/analytics.js-integration-nudgespot.git",
    "@segment/analytics.js-integration-olark": "git+https://github.com/segment-integrations/analytics.js-integration-olark.git",
    "@segment/analytics.js-integration-optimizely": "git+https://github.com/segment-integrations/analytics.js-integration-optimizely.git",
    "@segment/analytics.js-integration-outbound": "git+https://github.com/segment-integrations/analytics.js-integration-outbound.git",
    "@segment/analytics.js-integration-parsely": "git+https://github.com/segment-integrations/analytics.js-integration-parsely.git",
    "@segment/analytics.js-integration-perfect-audience": "git+https://github.com/segment-integrations/analytics.js-integration-perfect-audience.git",
    "@segment/analytics.js-integration-pingdom": "git+https://github.com/segment-integrations/analytics.js-integration-pingdom.git",
    "@segment/analytics.js-integration-piwik": "git+https://github.com/segment-integrations/analytics.js-integration-piwik.git",
    "@segment/analytics.js-integration-preact": "git+https://github.com/segment-integrations/analytics.js-integration-preact.git",
    "@segment/analytics.js-integration-qualaroo": "git+https://github.com/segment-integrations/analytics.js-integration-qualaroo.git",
    "@segment/analytics.js-integration-quantcast": "git+https://github.com/segment-integrations/analytics.js-integration-quantcast.git",
    "@segment/analytics.js-integration-quanticmind": "git+https://github.com/segment-integrations/analytics.js-integration-quanticmind.git",
    "@segment/analytics.js-integration-ramen": "git+https://github.com/segment-integrations/analytics.js-integration-ramen.git",
    "@segment/analytics.js-integration-rollbar": "git+https://github.com/segment-integrations/analytics.js-integration-rollbar.git",
    "@segment/analytics.js-integration-route": "git+https://github.com/segment-integrations/analytics.js-integration-route.git",
    "@segment/analytics.js-integration-saasquatch": "git+https://github.com/segment-integrations/analytics.js-integration-saasquatch.git",
    "@segment/analytics.js-integration-satismeter": "git+https://github.com/segment-integrations/analytics.js-integration-satismeter.git",
    "@segment/analytics.js-integration-segmentio": "git+https://github.com/segment-integrations/analytics.js-integration-segmentio.git",
    "@segment/analytics.js-integration-sentry": "git+https://github.com/segment-integrations/analytics.js-integration-sentry.git",
    "@segment/analytics.js-integration-simplereach": "git+https://github.com/segment-integrations/analytics.js-integration-simplereach.git",
    "@segment/analytics.js-integration-snapengage": "git+https://github.com/segment-integrations/analytics.js-integration-snapengage.git",
    "@segment/analytics.js-integration-spinnakr": "git+https://github.com/segment-integrations/analytics.js-integration-spinnakr.git",
    "@segment/analytics.js-integration-supporthero": "git+https://github.com/segment-integrations/analytics.js-integration-supporthero.git",
    "@segment/analytics.js-integration-taplytics": "git+https://github.com/segment-integrations/analytics.js-integration-taplytics.git",
    "@segment/analytics.js-integration-tapstream": "git+https://github.com/segment-integrations/analytics.js-integration-tapstream.git",
    "@segment/analytics.js-integration-trakio": "git+https://github.com/segment-integrations/analytics.js-integration-trakio.git",
    "@segment/analytics.js-integration-twitter-ads": "git+https://github.com/segment-integrations/analytics.js-integration-twitter-ads.git",
    "@segment/analytics.js-integration-userlike": "git+https://github.com/segment-integrations/analytics.js-integration-userlike.git",
    "@segment/analytics.js-integration-uservoice": "git+https://github.com/segment-integrations/analytics.js-integration-uservoice.git",
    "@segment/analytics.js-integration-vero": "git+https://github.com/segment-integrations/analytics.js-integration-vero.git",
    "@segment/analytics.js-integration-visual-website-optimizer": "git+https://github.com/segment-integrations/analytics.js-integration-visual-website-optimizer.git",
    "@segment/analytics.js-integration-webengage": "git+https://github.com/segment-integrations/analytics.js-integration-webengage.git",
    "@segment/analytics.js-integration-woopra": "git+https://github.com/segment-integrations/analytics.js-integration-woopra.git",
    "@segment/analytics.js-integration-wootric": "git+https://github.com/segment-integrations/analytics.js-integration-wootric.git",
    "@segment/analytics.js-integration-yandex-metrica": "git+https://github.com/segment-integrations/analytics.js-integration-yandex-metrica.git"
  },
```
./index.js
```
var Integrations = {
  'adroll': require('@segment/analytics.js-integration-adroll'),
  'adwords': require('@segment/analytics.js-integration-adwords'),
  'alexa': require('@segment/analytics.js-integration-alexa'),
  'amplitude': require('@segment/analytics.js-integration-amplitude'),
  'appcues': require('@segment/analytics.js-integration-appcues'),
  'atatus': require('@segment/analytics.js-integration-atatus'),
  'autosend': require('@segment/analytics.js-integration-autosend'),
  'awesm': require('@segment/analytics.js-integration-awesm'),
  'bing-ads': require('@segment/analytics.js-integration-bing-ads'),
  'blueshift': require('@segment/analytics.js-integration-blueshift'),
  'boomtrain': require('@segment/analytics.js-integration-boomtrain'),
  'bronto': require('@segment/analytics.js-integration-bronto'),
  'bugherd': require('@segment/analytics.js-integration-bugherd'),
  'bugsnag': require('@segment/analytics.js-integration-bugsnag'),
  'chameleon': require('@segment/analytics.js-integration-chameleon'),
  'chartbeat': require('@segment/analytics.js-integration-chartbeat'),
  'clicky': require('@segment/analytics.js-integration-clicky'),
  'comscore': require('@segment/analytics.js-integration-comscore'),
  'crazy-egg': require('@segment/analytics.js-integration-crazy-egg'),
  'curebit': require('@segment/analytics.js-integration-curebit'),
  'customerio': require('@segment/analytics.js-integration-customerio'),
  'drift': require('@segment/analytics.js-integration-drift'),
  'drip': require('@segment/analytics.js-integration-drip'),
  'elevio': require('@segment/analytics.js-integration-elevio'),
  'errorception': require('@segment/analytics.js-integration-errorception'),
  'evergage': require('@segment/analytics.js-integration-evergage'),
  'extole': require('@segment/analytics.js-integration-extole'),
  'facebook-conversion-tracking': require('@segment/analytics.js-integration-facebook-conversion-tracking'),
  'facebook-custom-audiences': require('@segment/analytics.js-integration-facebook-custom-audiences'),
  'facebook-pixel': require('@segment/analytics.js-integration-facebook-pixel'),
  'foxmetrics': require('@segment/analytics.js-integration-foxmetrics'),
  'frontleaf': require('@segment/analytics.js-integration-frontleaf'),
  'gauges': require('@segment/analytics.js-integration-gauges'),
  'get-satisfaction': require('@segment/analytics.js-integration-get-satisfaction'),
  'google-tag-manager': require('@segment/analytics.js-integration-google-tag-manager'),
  'gosquared': require('@segment/analytics.js-integration-gosquared'),
  'heap': require('@segment/analytics.js-integration-heap'),
  'hellobar': require('@segment/analytics.js-integration-hellobar'),
  'hittail': require('@segment/analytics.js-integration-hittail'),
  'hubspot': require('@segment/analytics.js-integration-hubspot'),
  'improvely': require('@segment/analytics.js-integration-improvely'),
  'inspectlet': require('@segment/analytics.js-integration-inspectlet'),
  'intercom': require('@segment/analytics.js-integration-intercom'),
  'keen-io': require('@segment/analytics.js-integration-keen-io'),
  'kenshoo': require('@segment/analytics.js-integration-kenshoo'),
  'kissmetrics': require('@segment/analytics.js-integration-kissmetrics'),
  'klaviyo': require('@segment/analytics.js-integration-klaviyo'),
  'livechat': require('@segment/analytics.js-integration-livechat'),
  'lucky-orange': require('@segment/analytics.js-integration-lucky-orange'),
  'lytics': require('@segment/analytics.js-integration-lytics'),
  'madkudu': require('@segment/analytics.js-integration-madkudu'),
  'mixpanel': require('@segment/analytics.js-integration-mixpanel'),
  'mojn': require('@segment/analytics.js-integration-mojn'),
  'mouseflow': require('@segment/analytics.js-integration-mouseflow'),
  'mousestats': require('@segment/analytics.js-integration-mousestats'),
  'navilytics': require('@segment/analytics.js-integration-navilytics'),
  'nudgespot': require('@segment/analytics.js-integration-nudgespot'),
  'olark': require('@segment/analytics.js-integration-olark'),
  'optimizely': require('@segment/analytics.js-integration-optimizely'),
  'outbound': require('@segment/analytics.js-integration-outbound'),
  'parsely': require('@segment/analytics.js-integration-parsely'),
  'perfect-audience': require('@segment/analytics.js-integration-perfect-audience'),
  'pingdom': require('@segment/analytics.js-integration-pingdom'),
  'piwik': require('@segment/analytics.js-integration-piwik'),
  'preact': require('@segment/analytics.js-integration-preact'),
  'qualaroo': require('@segment/analytics.js-integration-qualaroo'),
  'quantcast': require('@segment/analytics.js-integration-quantcast'),
  'quanticmind': require('@segment/analytics.js-integration-quanticmind'),
  'ramen': require('@segment/analytics.js-integration-ramen'),
  'rollbar': require('@segment/analytics.js-integration-rollbar'),
  'route': require('@segment/analytics.js-integration-route'),
  'saasquatch': require('@segment/analytics.js-integration-saasquatch'),
  'satismeter': require('@segment/analytics.js-integration-satismeter'),
  'segmentio': require('@segment/analytics.js-integration-segmentio'),
  'sentry': require('@segment/analytics.js-integration-sentry'),
  'simplereach': require('@segment/analytics.js-integration-simplereach'),
  'snapengage': require('@segment/analytics.js-integration-snapengage'),
  'spinnakr': require('@segment/analytics.js-integration-spinnakr'),
  'supporthero': require('@segment/analytics.js-integration-supporthero'),
  'taplytics': require('@segment/analytics.js-integration-taplytics'),
  'tapstream': require('@segment/analytics.js-integration-tapstream'),
  'trakio': require('@segment/analytics.js-integration-trakio'),
  'twitter-ads': require('@segment/analytics.js-integration-twitter-ads'),
  'userlike': require('@segment/analytics.js-integration-userlike'),
  'uservoice': require('@segment/analytics.js-integration-uservoice'),
  'vero': require('@segment/analytics.js-integration-vero'),
  'visual-website-optimizer': require('@segment/analytics.js-integration-visual-website-optimizer'),
  'webengage': require('@segment/analytics.js-integration-webengage'),
  'woopra': require('@segment/analytics.js-integration-woopra'),
  'wootric': require('@segment/analytics.js-integration-wootric'),
  'yandex-metrica': require('@segment/analytics.js-integration-yandex-metrica')
}
```


    
    
    


-------

[Segment]: https://segment.com
[MIT license]: License.md
[Analytics.js Library Reference]: https://segment.com/docs/libraries/analytics.js
[Analytics.js Quickstart]: https://segment.com/docs/tutorials/quickstart-analytics.js
[analytics.js-core]: https://github.com/segmentio/analytics.js-core
[analytics.js-integrations]: https://github.com/segment-integrations?query=analytics.js-integration
[ci-badge]: https://travis-ci.org/segmentio/analytics.js.png?branch=master
[ci-link]: https://travis-ci.org/segmentio/analytics.js
[integrations]: https://segment.com/integrations
[libraries]: https://segment.com/libraries
[nodejs.org]: https://nodejs.org/
[spec]: https://segment.com/docs/spec/
