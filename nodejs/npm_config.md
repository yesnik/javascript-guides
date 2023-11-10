# NPM Config

## Show current config

```
npm config list
```

## Set registry

To resolve packages by name and version, npm talks to a registry website that implements the CommonJS 
Package Registry specification for reading package info.

NPM is configured to use the npm public registry by default: https://registry.npmjs.org

But we can set custom registry:

```
npm config set registry https://nexus.lan.site.com/repository/Npm-all/
```
