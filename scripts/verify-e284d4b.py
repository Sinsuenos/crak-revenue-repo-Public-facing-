#!/usr/bin/env python3
"""Fresh production screenshots for verification of commit e284d4b."""
import asyncio, time
from playwright.async_api import async_playwright

BASE = 'https://crak-revenue-repo-public-facing.vercel.app'
TS = time.strftime('%Y%m%d-%H%M%S')

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        
        # 1. Landing page (EN - default)
        page = await browser.new_page(viewport={'width': 1536, 'height': 1024})
        await page.goto(BASE, wait_until='networkidle', timeout=30000)
        await page.wait_for_timeout(2500)
        # Verify language is English
        en_text = await page.inner_text('body')
        has_enter = 'ENTER' in en_text
        await page.screenshot(path=f'/home/z/my-project/download/verify-landing-en-{TS}.png', full_page=False)
        print(f'[1] Landing EN: saved (ENTER button visible: {has_enter})')
        
        # 2. Landing page (ES - toggled)
        await page.evaluate("""() => {
            const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim() === 'ES');
            if (btn) btn.click();
        }""")
        await page.wait_for_timeout(1500)
        es_text = await page.inner_text('body')
        has_entrar = 'ENTRAR' in es_text
        await page.screenshot(path=f'/home/z/my-project/download/verify-landing-es-{TS}.png', full_page=False)
        print(f'[2] Landing ES: saved (ENTRAR button visible: {has_entrar})')
        
        # 3. Repository page (EN)
        await page.goto(BASE + '/repository', wait_until='networkidle', timeout=30000)
        await page.wait_for_timeout(2500)
        repo_text = await page.inner_text('body')
        has_repo = 'Offer Repository' in repo_text
        await page.screenshot(path=f'/home/z/my-project/download/verify-repo-en-{TS}.png', full_page=False)
        print(f'[3] Repository EN: saved (Offer Repository visible: {has_repo})')
        
        # 4. Repository scrolled (show category order)
        await page.evaluate('window.scrollTo(0, document.body.scrollHeight * 0.35)')
        await page.wait_for_timeout(800)
        await page.screenshot(path=f'/home/z/my-project/download/verify-repo-scrolled-{TS}.png', full_page=False)
        print(f'[4] Repository scrolled: saved')
        
        # 5. Verify legal links work
        for path in ['/legal/dmca', '/legal/privacy', '/legal/terms', '/legal/contact']:
            resp = await page.goto(BASE + path, wait_until='networkidle', timeout=15000)
            status = resp.status if resp else 'N/A'
            await page.screenshot(path=f'/home/z/my-project/download/verify-legal-{path.replace("/","")}-{TS}.png', full_page=False)
            print(f'[5] {path}: HTTP {status}')
        
        await browser.close()
        print(f'\nAll screenshots saved with timestamp {TS}')

asyncio.run(main())
