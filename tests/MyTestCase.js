// Bring It On

const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

async function noNameYet() {
  // Open the browser
  var edge = require('selenium-webdriver/edge');
  var service = new edge.ServiceBuilder().setPort(55555).build();
  var options = new edge.Options();
  // configure browser options ...
  var driver = edge.Driver.createSession(options, service);
  await driver.manage().window().maximize();
  // Navigate to the page
  await driver.get('https://www.marshallheadphones.com/us/en/');

  await driver
  .findElement(
    By.xpath('//*[@id="onetrust-accept-btn-handler"]')
  )
  .click();

  await driver
    .findElement(
      By.xpath('/html/body/div[3]/div[6]/div/div[1]/div[3]/div/div[2]/div[1]/a')
    )
    .click();

  await driver
    .findElement(
      By.xpath('//*[@id="splide01-clone06"]')
    )
    .click();
  
  await driver
    .findElement(
      By.xpath('/html/body/div[3]/div[9]/div[2]/div[3]/div[5]/div/div/a[3]')
    )
    .click();

  await driver
    .findElement(
      By.xpath('/html/body/div[3]/div[9]/div[2]/div[3]/div[7]/div[2]')
    )
    .click();

  await driver.sleep(1000);
  let pageTitle = await driver.getTitle().then(function (title) {
    return title;
  });
  assert.strictEqual(pageTitle, 'Контакты');
}
noNameYet();
