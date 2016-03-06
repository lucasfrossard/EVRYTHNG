# v3.4.3 (26-01-2016)

## Changes

- **Callback API**: Make deprecation warning mutable

# v3.4.2 (22-12-2015)

## Changes

- **Errors**: Added `code` and `moreInfo` and removed `message` and `type` to/from EVT.js errors.
- **Callback API**: Added deprecation when callbacks are executed

# v3.4.1 (14-12-2015)

## Changes

- **Transport**: Common transport module for Node.js and Browser

# v3.4.0 (02-12-2015)

## Features

- **Projects**: CRUD access in the Operator scope
- **Applications**: CRUD access in the Project resource
- **Reactor Logs**: RD access in the Operator scope
- **Actions**: allow to override global Geolocation setting per request

# v3.3.2 (27-10-2015)

## Bug fixes

- **Resource path**: newly created entities have wrong resource path [#37]

# v3.3.1 (09-09-2015)

## Bug fixes

- **Properties**: normalize arguments with falsy values (e.g. `0`, `false`) on property creation or update

# v3.3.0 (07-09-2015)

## Features

- **Trusted App**: updated permissions for TrustedApp scope
- **Custom headers**: allow to setup custom headers with **headers** object option
- **Action Types**: CRUD access like other entities
- **Filters**: escape special characters for filter param when using object notation

## Bug fixes

- **Properties**: normalize arguments on creation, just like updates. Read properties with special characters
- **Empty fields**: empty fields not being sent to API request
- **Encoding**: nested params objects (e.g. filters) are only encoded once

# v3.2.0 (10-08-2015)

## Features

- **Trusted App**: scope to use with you **Application Secret Key**, mainly used in Reactor scripts 
(only available in **evrythng-extended.js**)

## Breaking changes

- **plugins**: `EVT.use()` to install plugin is now synchronous. Callback has been removed. Required dependencies
now use `$inject` property instead of `requires`

# v3.1.2 (25-06-2015)

## Features

- **documentation**: clearer usage and installation steps. Consistent format from other libs

# v3.1.1 (19-06-2015)

## Bug fixes

- **package.json**: Github url with `git://` protocol

# v3.1.0 (17-06-2015)

## Bug fixes

- **xhr**: responses without headers were being ignored

## Features

- **interceptors**: setup request and response interceptors globally or as a one-off request settings
- **plugins**: ability to install/use plugins for additional functionality

## Breaking changes

- **synchronous requests**: sync option removed for Node.js vs Browser consistency and to promote best practices
