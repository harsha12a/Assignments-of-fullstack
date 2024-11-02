const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://codechef.com')
    await page.pdf({
        path: 'example.pdf',
        format: 'A4',
        margin: {
            top: '50px',
            right: '50px',
            bottom: '50px',
            left: '50px'  
        },
        printBackground:true
    })
    await browser.close()
})()