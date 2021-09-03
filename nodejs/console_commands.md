
## Console commands

- Install package
  ```bash
  npm install @babel/core
  ```

- Uninstall package from project
  ```bash
  npm remove @babel/core @babel/node
  ```

- Show versions of installed packages
  ```bash
  npm list
  npm list -g
  npm list jquery
  ```

- Show info about package from NPM repo
  ```bash
  npm view react
  ```

- View available versions of the package
  ```bash
  npm view react versions
  ```

- Run module that was not installed globally
  ```bash
  npx jest
  ```

- Show path for installed packages
  ```bash
  # Global installation
  npm bin -g

  # Local installation
  npm bin
  ```

- Show outdated packages
```bash
yarn outdated
```
