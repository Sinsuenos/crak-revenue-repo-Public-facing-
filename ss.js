const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  const out = '/home/z/my-project/download';

  // 1. Age gate EN
  console.log('1/4 Age gate EN...');
  await page.goto('http://localhost:3099/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: `${out}/age-gate-en.png`, fullPage: true });
  console.log('  done');

  // 2. Age gate ES
  console.log('2/4 Age gate ES...');
  const esBtn = await page.$('button:has-text("ES")');
  if (esBtn) { await esBtn.click(); await page.waitForTimeout(2000); }
  await page.screenshot({ path: `${out}/age-gate-es.png`, fullPage: true });
  console.log('  done');

  // 3. Offer page with 3 MyErolink
  console.log('3/4 Offer page...');
  const enterBtn = await page.$('button:has-text("ENTRAR"), button:has-text("ENTER")');
  if (enterBtn) {
    await enterBtn.click();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(3000);
  } else {
    await page.goto('http://localhost:3099/repository', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(3000);
  }
  await page.screenshot({ path: `${out}/offer-page-full.png`, fullPage: true });
  console.log('  done');

  // 4. Legal page (DMCA) in Spanish
  console.log('4/4 Legal DMCA ES...');
  await page.goto('http://localhost:3099/legal/dmca', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: `${out}/legal-dmca-es.png`, fullPage: true });
  console.log('  done');

  await browser.close();
  console.log('All screenshots complete!');
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
