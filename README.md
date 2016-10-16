```
git clone git@github.com:Bartimeys/angular_test.git

```
```npm install
```

```
npm start
```
if you have error in linux/ubuntu
```
killall -9 node

```
## Testing

```
npm test
```

```
npm run test-single-run
```


### End to end testing


```
npm start
```

In addition, since Protractor is built upon WebDriver we need to install this.  The angular-seed
project comes with a predefined script to do this:

```
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```
