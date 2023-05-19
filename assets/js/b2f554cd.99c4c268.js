"use strict";(self.webpackChunkthe_fount=self.webpackChunkthe_fount||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"new-turbo-pitch-endpoints","metadata":{"permalink":"/blog/new-turbo-pitch-endpoints","source":"@site/blog/2023-05-19-new-tool-endpoints.md","title":"New TurboPitch endpoints","description":"While the API has always contained the ability to fetch all the Brandscape Data values, a lot of the time you only need","date":"2023-05-19T00:00:00.000Z","formattedDate":"May 19, 2023","tags":[],"readingTime":0.73,"hasTruncateMarker":false,"authors":[{"name":"Erik Bernskiold","url":"https://github.com/erikbernskiold","imageURL":"https://github.com/erikbernskiold.png","key":"erikbernskiold"}],"frontMatter":{"slug":"new-turbo-pitch-endpoints","title":"New TurboPitch endpoints","authors":"erikbernskiold"},"nextItem":{"title":"New company and sector details on Brandscape Data","permalink":"/blog/upgraded-brandscape-data"}},"content":"While the API has always contained the ability to fetch all the Brandscape Data values, a lot of the time you only need\\na subset of data in a specific way. This is the philosophy behind the suite of TurboPitch endpoints which are already\\navailable in The Fount for you to use.\\n\\nToday we are opening up the use of these to the API as well, so that you can get the data programatically\\nin the same way as you can graphically in The Fount.\\n\\nThe new endpoints are available for most of the TurboPitch tools. If one that you need isn\'t yet available, please reach\\nout to us, and we are happy to add it for you.\\n\\nIf you are having problems with using the API, or if you have any questions or feedback,\\nplease [do reach out to us](mailto:support@bernskioldmedia.com). We are happy to help."},{"id":"upgraded-brandscape-data","metadata":{"permalink":"/blog/upgraded-brandscape-data","source":"@site/blog/2023-04-20-upgraded-brandscape-data.md","title":"New company and sector details on Brandscape Data","description":"The Brandscape Data endpoint has been extended with details and filtering based on two new relationships: Sector and Company.","date":"2023-04-20T00:00:00.000Z","formattedDate":"April 20, 2023","tags":[],"readingTime":1.105,"hasTruncateMarker":false,"authors":[{"name":"Erik Bernskiold","url":"https://github.com/erikbernskiold","imageURL":"https://github.com/erikbernskiold.png","key":"erikbernskiold"}],"frontMatter":{"slug":"upgraded-brandscape-data","title":"New company and sector details on Brandscape Data","authors":"erikbernskiold"},"prevItem":{"title":"New TurboPitch endpoints","permalink":"/blog/new-turbo-pitch-endpoints"},"nextItem":{"title":"Introducing the BAV API v2.0","permalink":"/blog/introducing-version-2-0"}},"content":"The [Brandscape Data](/docs/2.x/core-resources/brandscape-data) endpoint has been extended with details and filtering based on two new relationships: Sector and Company.\\n\\nThe sector is a higher-level grouping of categories to create larger groups of brands. Whereas categories can vary greatly between markets, sectors stay consitent. This makes them perfect for cross-market and cross-year analysis.\\n\\nThe company is the legal entity that owns a given brand. One company can own many brands. Through the company you can tie together financial performance such as annual results or stock price details with the brandscape data.\\n\\nBoth are available now as includes in the brandscape data endpoint. This means that for each brandscape data record you can get the company and sector details along with all other data.\\n\\n```bash\\n# Include the company\\nGET /api/v2/brandscape-data/?include=company\\n\\n# Include the sector\\nGET /api/v2/brandscape-data/?include=company\\n```\\n\\nBoth of them are also available to filter by so that you can get the brandscape data for all brands in one or more sectors and/or companies:\\n\\n\\n```bash\\n# Only include two specific companies.\\nGET /api/v2/brandscape-data/?filter[companies]=1,2\\n\\n# Only include the sector with ID 1.\\nGET /api/v2/brandscape-data/?filter[sectors]=1\\n```\\n\\nYou can read more in the [Brandscape Data endpoint docs](/docs/2.x/core-resources/brandscape-data).\\n\\nIf you are having problems with using the API, or if you have any questions or feedback,\\nplease [do reach out to us](mailto:support@bernskioldmedia.com). We are happy to help."},{"id":"introducing-version-2-0","metadata":{"permalink":"/blog/introducing-version-2-0","source":"@site/blog/2023-02-12-version-2-0.md","title":"Introducing the BAV API v2.0","description":"We are excited to release the second version of the API which includes a number of new features and improvements. Thank","date":"2023-02-12T00:00:00.000Z","formattedDate":"February 12, 2023","tags":[],"readingTime":0.95,"hasTruncateMarker":false,"authors":[{"name":"Erik Bernskiold","url":"https://github.com/erikbernskiold","imageURL":"https://github.com/erikbernskiold.png","key":"erikbernskiold"}],"frontMatter":{"slug":"introducing-version-2-0","title":"Introducing the BAV API v2.0","authors":"erikbernskiold"},"prevItem":{"title":"New company and sector details on Brandscape Data","permalink":"/blog/upgraded-brandscape-data"},"nextItem":{"title":"Welcome to the updated developer website!","permalink":"/blog/welcome"}},"content":"We are excited to release the second version of the API which includes a number of new features and improvements. Thank\\nyou to everyone who have provided feedback and suggestions for improvements.\\n\\nWith the new version we aim to make a series of breaking changes that are only possible with a new version of the API.\\nThey will allow us to better add continuous improvements and new features regularly without having to release new\\nbreaking-change versions.\\n\\nWe suggest that you review all calls and responses for any changes to the responses.\\n\\nAt a high-level, these are the changes that will affect you:\\n\\n- There are no removed resources but several new ones.\\n- Some fields have been given new names, a select few have been removed.\\n- Filtering now has a new, consistent format (see [filtering](/docs/2.x/customizing/filters)).\\n- Sorting now has a new, simplified format (see [sorting](/docs/2.x/customizing/filters)).\\n- Expansions are now includes (see [includes](/docs/2.x/customizing/includes)).\\n- Ability to scope API keys to specific operations.\\n\\nIf you are having problems with using the API, or if you have any questions or feedback,\\nplease [do reach out to us](mailto:support@bernskioldmedia.com). We are happy to help."},{"id":"welcome","metadata":{"permalink":"/blog/welcome","source":"@site/blog/2022-04-29-welcome.md","title":"Welcome to the updated developer website!","description":"Welcome, to the updated BAV@WPP developer website which currently houses the BAV API documentation but will also be the home to any future development related documentation for BAV.","date":"2022-04-29T00:00:00.000Z","formattedDate":"April 29, 2022","tags":[],"readingTime":0.42,"hasTruncateMarker":false,"authors":[{"name":"Erik Bernskiold","url":"https://github.com/erikbernskiold","imageURL":"https://github.com/erikbernskiold.png","key":"erikbernskiold"}],"frontMatter":{"slug":"welcome","title":"Welcome to the updated developer website!","authors":"erikbernskiold"},"prevItem":{"title":"Introducing the BAV API v2.0","permalink":"/blog/introducing-version-2-0"}},"content":"Welcome, to the updated BAV@WPP developer website which currently houses the BAV API documentation but will also be the home to any future development related documentation for BAV.\\n\\nWe are excited that so many of you are using the API to build analytical integrations into your specific workflows and tools.\\n\\nIn this stream we\'ll be posting news relating to the API and other development features. If you\'ve got an active API key on the platform we\'ll also be sending them to you via e-mail."}]}')}}]);