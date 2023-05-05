---
title: "Averos Translation: Reference & Conventions"
permalink: /averos/documentation/references-and-conventions/reference-averos-translation/
excerpt: "Reference - Averos Translation"
toc: true
---

## **Averos Translation**

Averos framework comes with a Translation module, named `AverosTranslationModule`, that is already supporting 11 languages out of the box but can include any other language.

Below are the list of the languages that averos supports out of the box along with their country code :


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


**Averos Translation** module is a stand alone module that could be integrated seperately in any angular application and could be, thus, considered as a **multi-language** application **enabler**.
**Averos translation** is built on top of the angular `locale` module and does not rely on any other third party library.
The module is enabled by default for all averos application.

### **Add Translation Language**

**Averos** workflow allows to add specific language support using the workflow command:
 
```bash
    ng g @wiforge/averos:add-language --languageCode=[language code]
```

### **Add Translation Entry**

**Averos** workflow allows to add a new translation entry related to a specific language by running the command below:

```bash
    ng g @wiforge/averos:add-translation-entry --key=[yourKey] --value=[Your Translation] --lang=[language code]
```

📢 More details on this module is available in the [detailed averos documentation]({{"/averos/documentation/averos-translation/description/" | relative_url}} "averos translation").
{: .notice--info}
