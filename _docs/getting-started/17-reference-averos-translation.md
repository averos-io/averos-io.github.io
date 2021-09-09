---
title: "Reference"
permalink: /averos/docs/reference-averos-translation/
excerpt: "Reference -  averos translation"
toc: true
---

## **Averos Translation**

Averos framework comes with a Translation module, named `AverosTranslationModule`, that is already supporting 11 languages out of the box but can include any other language.

**Averos** workflow allows to add specific language support using the workflow command:
 
```bash
    ng g @wiforge/averos:add-language --languageCode=[language code]
```

**Averos** workflow allows to add a specific translation key by running the command below:

```bash
    ng g @wiforge/averos:add-translation-entry --key=[yourKey] --value=[Your Translation] --lang=[language code]
```

Below are the list of the languages that averos supports out of the box along with their code :


| **Supported Language** | **Language Code** |
| ------ | ------ | 
| Arabic     [ 🇹🇳 ] | `ar` |
| Chinese    [ 🇨🇳 ] | `cn` |
| English    [ 🇺🇸 ] | `en` |
| Spanish    [ 🇪🇸 ] | `es` |
| French     [ 🇫🇷 ] | `fr` |
| German     [ 🇩🇪 ] | `de` |
| Japanese   [ 🇯🇵 ] | `jp` |
| Dutch      [ 🇳🇱 ] | `nl` |
| Norwegian  [ 🇳🇴 ] | `no` |
| Russian    [ 🇷🇺 ] | `ru` |
| Swedish    [ 🇸🇪 ] | `se` |


The averos Translation module is a stand alone module that could be integrated seperately in any angular application and could be thus considered as a multi-language application enabler.
Averos translation is built on top of the angular internationalization module and does not relay on any other third party library.
The module is enabled by default for all averos application.

>More details on this module will be available soon on the ongoing averos documentation.
{: .notice--info}
