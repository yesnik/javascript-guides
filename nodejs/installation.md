# Installation

### From official site

Download installer: https://nodejs.org/

### Add NodeSource yum repository

If you want to install version 17 define `setup_17.x` in the command below.

Run the following curl command to add the [NodeSource repository](https://github.com/nodesource/distributions) to your system:

```bash
curl -sL https://rpm.nodesource.com/setup_17.x | sudo bash -
```

### Install Node.js and npm

Once the NodeSource repository is enabled, install Node.js and npm by typing:

```bash
sudo yum install nodejs
```

### NPM proxy

See [npm proxy settings](https://github.com/yesnik/linux-guides/blob/master/proxy.md#npm-proxy-settings)

### Update npm

[NPM](https://github.com/npm/cli) is a JavaScript package manager. 

```bash
sudo npm install -g npm

npm -v
#=> 7.9.0
```

### Update node

```bash
sudo npm install -g n
sudo n stable

# If you want latest node
sudo n latest

node -v
#=> v14.16.1
```

### Start project

```bash
mkdir mysite
npm init
```

This command will create `package.json` file.
