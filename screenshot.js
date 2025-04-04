const puppeteer = require('puppeteer');

async function generateScreenshot() {
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--start-maximized']
    });
    const page = await browser.newPage();
    
    // 设置视口大小
    await page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 2  // 2倍缩放以获得更高清晰度
    });

    // 加载本地HTML文件
    await page.goto('file://' + __dirname + '/index.html', {
        waitUntil: 'networkidle0'
    });

    // 等待页面完全加载
    await page.waitForTimeout(2000);

    // 截图
    await page.screenshot({
        path: 'commission.png',
        fullPage: true,
        quality: 100,
        type: 'png'
    });

    await browser.close();
}

generateScreenshot(); 