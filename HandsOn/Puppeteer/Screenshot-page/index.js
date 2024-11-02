const puppeteer = require('puppeteer');

(async () =>{
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({width: 1400, height: 800})
    await page.goto('https://codechef.com')
    await page.screenshot({path: 'example.png'})
    await browser.close()
})()