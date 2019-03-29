# Fiber Oracle Network

> Fiber is an Oracle built on the Ethereum blockchain, allowing contracts to bridge a connection between a decentralized source (the blockchain), and a centralized source (the internet). Contracts will be able to utilize external APIs using an intuitive calling methodology, capable of fetching data from whichever source is requested, and returning an exact data value that a contract requires.


## Background

Due to the trustless and decentralized nature of blockchain technology, direct utilization of resources and information outside of its direct storage are prohibited. This is to ensure that any information passed around the blockchain can be guaranteed truthful from within the chain's data storage. However, it is possible to bring external data from within the blockchain using a bridge known as an `oracle`. Oracles act as a middleman between a smart contract and whatever data the contract would like to extract from a web-hosted resource (such as website APIs, CSVs, spreadsheets, PDFs, etc).

Fiber is an open-source blockchain oracle built on Ethereum, and allows users to make a request to any resource they'd like, and handle the response through a callback function on their smart contract. Fiber is a library that can be included in a smart contract, and provides an easy method to make a `fiber.request` or process the response value in a `__callback` function.


## Features

- **Lightweight:** Fiber is as barebones and plain as possible, with no overhead and no additional complexities included in the library contract.

- **Secure:** Fiber will ensure that response values returned to a `__callback` function are as expected, and will additionally run a check on the last data object it provided to the smart contract's calling functioning. This serves as an anti-data-tampering method, and prevents bad data from being passed on to the contract in the event that occurs. Finally, every oracle request is stored and a unique ID is provided in the event of an issue occurring, allowing for easier troubleshooting and resolving of any serious issues.

- **Flexible:** One major aspect of building Fiber was to allow for as much flexibility in a user's request as possible. That includes allowing many different sources to call from, such as: JSON (HTTP endpoints or files), IPFS, CSV, XLSX, XML, and plain-text. Additional data sources can be added as necessary.

- **Error Handling**: The oracle server will handle any errors that occur, and will also pass on that information if requested.