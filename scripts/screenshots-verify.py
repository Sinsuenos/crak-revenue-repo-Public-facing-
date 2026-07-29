#!/usr/bin/env python3
"""Screenshot production landing page and repository page in both EN and ES."""
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
        
        # Landing page ES (toggle language)
        # Click ES button
        await page.click('button:has-text("ES")')
        await page.wait_for_timeout(1000)
        await page.screenshot(path='/home/z/my-project/download/landing-es.png', full_page=False)
        print('Landing ES saved')
        
        # Repository page EN
        await page.goto(BASE + '/repository', wait_until='networkidle', timeout=30000)
        await page.wait_for_timeout(2000)
        await page.screenshot(path='/home/z/my-project/download/repository-en.png', full_page=False)
        print('Repository EN saved')
        
        # Repository page - scroll down to see more categories
        await page.evaluate('window.scrollTo(0, document.body.scrollHeight / 3)')
        await page.wait_for_timeout(500)
        await page.screenshot(path='/home/z/my-project/download/repository-en-scrolled.png', full_page=False)
        print('Repository EN scrolled saved')

        await browser.close()

asyncio.run(main())
