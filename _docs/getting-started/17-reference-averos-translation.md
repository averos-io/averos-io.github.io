---
title: "Reference"
permalink: /averos/getting-started/reference-averos-translation/
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
| Arabic     [ πΉπ³ ] | `ar` |
| Chinese    [ π¨π³ ] | `cn` |
| English    [ πΊπΈ ] | `en` |
| Spanish    [ πͺπΈ ] | `es` |
| French     [ π«π· ] | `fr` |
| German     [ π©πͺ ] | `de` |
| Japanese   [ π―π΅ ] | `jp` |
| Dutch      [ π³π± ] | `nl` |
| Norwegian  [ π³π΄ ] | `no` |
| Russian    [ π·πΊ ] | `ru` |
| Swedish    [ πΈπͺ ] | `se` |


The averos Translation module is a stand alone module that could be integrated seperately in any angular application and could be thus considered as a multi-language application enabler.
Averos translation is built on top of the angular internationalization module and does not relay on any other third party library.
The module is enabled by default for all averos application.

π’ More details on this module is available in the [detailed averos documentation]({{"/averos/documentation/averos-translation/description/" | relative_url}} "averos translation").
{: .notice--info}
