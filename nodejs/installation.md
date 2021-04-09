## Installation

### Add NodeSource yum repository

The current LTS version of Node.js is version 10.x. 
If you want to install version 8 just change setup_10.x with setup_8.x in the command below.

Run the following curl command to add the NodeSource yum repository to your system:

```bash
curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -
```

### Install Node.js and npm

Once the NodeSource repository is enabled, install Node.js and npm by typing:

```bash
sudo yum install nodejs
```

### Update npm

```bash
sudo npm install -g npm

npm -v
#=> 6.12.1
```

### Update node

```bash
sudo npm install -g n
sudo n stable

# If you want latest node
sudo n latest

node -v
#=> v12.13.1
```

### Start project

```bash
mkdir mysite
npm init
```

This command will create `package.json` file.