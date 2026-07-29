#!/usr/bin/env python3
"""Fresh production screenshots after repo cleanup (commit 127fa2f)."""
import asyncio, time
from playwright.async_api import async_playwright

BASE = 'https://crak-revenue-repo-public-facing.vercel.app'
TS = time.strftime('%Y%m%d-%H%M%S')

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()

        # 1. Landing EN
        page = await browser.new_page(viewport={'width': 1536, 'height': 1024})
        await page.goto(BASE, wait_until='networkidle', timeout=30000)
        await page.wait_for_timeout(3000)
        text = await page.inner_text('body')
        has_enter = 'ENTER' in text
        await page.screenshot(path=f'/home/z/my-project/download/clean-landing-en-{TS}.png')
        print(f'[1] Landing EN: ENTER={has_enter}')

        # 2. Toggle to ES
        await page.evaluate("() => { const b = Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim() === 'ES'); if(b) b.click(); }")
        await page.wait_for_timeout(1500)
        text_es = await page.inner_text('body')
        has_entrar = 'ENTRAR' in text_es
        await page.screenshot(path=f'/home/z/my-project/download/clean-landing-es-{TS}.png')
        print(f'[2] Landing ES: ENTRAR={has_entrar}')

        # 3. Repository EN
        await page.goto(BASE + '/repository', wait_until='networkidle', timeout=30000)
        await page.wait_for_timeout(3000)
        await page.screenshot(path=f'/home/z/my-project/download/clean-repo-en-{TS}.png')
        print(f'[3] Repository EN: saved')

        # 4. Repository scrolled
        await page.evaluate('window.scrollTo(0, document.body.scrollHeight * 0.3)')
        await page.wait_for_timeout(800)
        await page.screenshot(path=f'/home/z/my-project/download/clean-repo-scrolled-{TS}.png')
        print(f'[4] Repository scrolled: saved')

        # 5. Legal pages quick check
        for path in ['/legal/dmca', '/legal/privacy', '/legal/terms', '/legal/contact']:
            resp = await page.goto(BASE + path, wait_until='networkidle', timeout=15000)
            print(f'[5] {path}: HTTP {resp.status if resp else "fail"}')

        await browser.close()
        print(f'\nTimestamp: {TS}')

asyncio.run(main())
