#!/usr/bin/env python3
"""Screenshot production pages - force click to bypass overlay."""
import asyncio
from playwright.async_api import async_playwright

BASE = 'https://crak-revenue-repo-public-facing.vercel.app'

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        
        # Landing page EN
        page = await browser.new_page(viewport={'width': 1536, 'height': 1024})
        await page.goto(BASE, wait_until='networkidle', timeout=30000)
        await page.wait_for_timeout(2000)
        await page.screenshot(path='/home/z/my-project/download/landing-en.png', full_page=False)
        print('Landing EN saved')
        
        # Toggle to ES via JS click on the button
        await page.evaluate("""() => {
            const btn = document.querySelector('button');
            // The toggle button shows 'ES' when in EN mode
            const buttons = Array.from(document.querySelectorAll('button'));
            const esBtn = buttons.find(b => b.textContent.trim() === 'ES');
            if (esBtn) esBtn.click();
        }""")
        await page.wait_for_timeout(1000)
        await page.screenshot(path='/home/z/my-project/download/landing-es.png', full_page=False)
        print('Landing ES saved')

        # Repository page EN
        await page.goto(BASE + '/repository', wait_until='networkidle', timeout=30000)
        await page.wait_for_timeout(2000)
        await page.screenshot(path='/home/z/my-project/download/repository-en.png', full_page=False)
        print('Repository EN saved')
        
        # Scroll to see category order
        await page.evaluate('window.scrollTo(0, document.body.scrollHeight * 0.4)')
        await page.wait_for_timeout(500)
        await page.screenshot(path='/home/z/my-project/download/repository-en-scrolled.png', full_page=False)
        print('Repository EN scrolled saved')

        await browser.close()

asyncio.run(main())
