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
  await driver.get('https://pastebin.com');

  await driver.findElement(By.id('postform-text'))
    .sendKeys(`git config --global user.name  "New Sheriff in Town"
git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
git push origin master --force`);
  console.log('1 passed');
  //  Close the banner that don't allow to push the button
  await driver.sleep(5000);
  await driver.wait(until.elementLocated(By.css('.active-path'), 100));
  await driver.findElement(By.css('.active-path')).click();

  // * Syntax Highlighting: "Bash"
  //  Make toggle on
  await driver
    .findElement(By.css('.toggle__control > label:nth-child(2)'))
    .click();

  //  Choose "Bash"
  //  Click the triangle
  await driver
    .findElement(By.xpath('//*[@id="select2-postform-format-container"]'))
    .click();

  // Choose Bash
  await driver
    .findElement(
      By.xpath(
        '(//ul[@class="select2-results__options select2-results__options--nested"]/*[.="Bash"])[1]'
      )
    )
    .click();
  console.log('2 passed');
  // * Paste Expiration: "10 Minutes"
  // Click to open the dropdown list
  await driver
    .findElement(
      By.css(
        'div.form-group.field-postform-expiration span.select2-selection__arrow'
      )
    )
    .click();
  console.log('3 passed');
  // Click to choose '10 minutes'
  await driver
    .findElement(
      By.xpath(
        '//span[@class="select2-results"]/ul[@class="select2-results__options"]/li[text()="10 Minutes"]'
      )
    )
    .click();

  // * Paste Name / Title: "how to gain dominance among developers"
  await driver
    .findElement(By.id('postform-name'))
    .sendKeys('how to gain dominance among developers');

  // 3. Сохранить paste:
  //  Push Save button
  await driver.wait(
    until.elementLocated(By.xpath('//button[@class="btn -big"]'), 10000)
  );
  await driver.findElement(By.xpath('//button[@class="btn -big"]')).click();
  console.log('4 passed');

  let pageTitle = await driver.getTitle().then(function (title) {
    return title;
  });
  await driver.sleep(1000);
  assert.strictEqual(
    pageTitle,
    'how to gain dominance among developers - Pastebin.com'
  );
  console.log('5 passed');
  // * Синтаксис подсвечен для bash
  await driver.wait(
    until.elementLocated(By.xpath('(//a[@class="btn -small h_800"])[1]'))
  );
  let syntaxHighlighting = await driver
    .findElement(By.xpath('(//a[@class="btn -small h_800"])[1]'))
    .getText()
    .then(function (text) {
      return text;
    });
  assert.strictEqual(syntaxHighlighting, 'Bash');
  console.log('6 passed');
  // * Проверить что код соответствует введенному в пункте 2
  await driver.wait(
    until.elementLocated(
      By.xpath('/html/body/div[1]/div[2]/div[1]/div[1]/div[4]/div[2]/ol')
    )
  );
  let pasteData = await driver
    .findElement(
      By.xpath('/html/body/div[1]/div[2]/div[1]/div[1]/div[4]/div[2]/ol')
    )
    .getText()
    .then(function (text) {
      return text;
    });
  console.log('7 passed');
  assert.strictEqual(
    pasteData,
    `git config --global user.name  "New Sheriff in Town"
git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
git push origin master --force`
  );
  // Close the browser
  await driver.sleep(5000);
  await driver.quit();
}
noNameYet();
