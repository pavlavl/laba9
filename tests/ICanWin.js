// I Can Win

const { Builder, By, until } = require('selenium-webdriver');

async function noNameYet() {
  // Открыть https://pastebin.com или аналогичный сервис в любом браузере
  // Open the browser
  var edge = require('selenium-webdriver/edge');
  var service = new edge.ServiceBuilder().setPort(55555).build();
  var options = new edge.Options();
  // configure browser options ...
  var driver = edge.Driver.createSession(options, service);
  await driver.get('https://pastebin.com');
  // Navigate to the page

  // Создать New Paste со следующими деталями:
  // * Код: "Hello from WebDriver"
  await driver
    .findElement(By.id('postform-text'))
    .sendKeys('Hello from WebDriver');

  // * Paste Expiration: "10 Minutes"
  // Click to open the dropdown list
  await driver
    .findElement(
      By.css(
        'div.form-group.field-postform-expiration span.select2-selection__arrow'
      )
    )
    .click();

  // Click to choose '10 minutes'
  await driver
    .findElement(
      By.xpath(
        '//span[@class="select2-results"]/ul[@class="select2-results__options"]/li[text()="10 Minutes"]'
      )
    )
    .click();

  // * Paste Name / Title: "helloweb"
  await driver.findElement(By.id('postform-name')).sendKeys('helloweb');

  // Close the browser
  await driver.sleep(5000); // just to see that everything works
  await driver.quit();
}
noNameYet();
