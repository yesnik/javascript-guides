# Installation

[NPM](https://github.com/npm/cli) is a JavaScript package manager. 

### NPM proxy

See [npm proxy settings](https://github.com/yesnik/linux-guides/blob/master/proxy.md#npm-proxy-settings)

### Install npm

- Ubuntu: `sudo apt install npm`
- Fedora: `sudo yum install npm`

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
npm init
```

This command will create `package.json` file.
