# Installation

[Node.js](https://nodejs.org/) is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.

[NPM](https://github.com/npm/cli) is a JavaScript package manager. 

### Install, upgrade npm

- Ubuntu: `sudo apt install npm`
- Fedora: `sudo yum install npm`
- Windows 10 (via [Chocolately](https://community.chocolatey.org/packages?q=node)):
   * `choco install nodejs` - install latest version
   * `choco install nodejs-lts` - install LTS version
   * `choco upgrade nodejs` - upgrade current version

### NPM proxy

See [npm proxy settings](https://github.com/yesnik/linux-guides/blob/master/proxy.md#npm-proxy-settings)

### Update npm

```bash
npm install -g npm@XX.YY.ZZ
```
Replace `XX.YY.ZZ` to the actual version of npm

### Install / update node via `n`

```bash
sudo npm install -g n

# For the latest stable version
sudo n stable

# For the latest LTS version
sudo n latest
```

### Start project

```bash
mkdir mysite
cd mysite
npm init
```

This command will create `package.json` file.
