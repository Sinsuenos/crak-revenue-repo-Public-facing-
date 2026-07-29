#!/usr/bin/env python3
"""Screenshot production landing page to verify hero brightness."""

import asyncio
from playwright.async_api import async_playwright

URL = 'https://crak-revenue-repo-public-facing.vercel.app/'
OUT = '/home/z/my-project/download/hero-brightness-verified.png'

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1536, 'height': 1024})
        await page.goto(URL, wait_until='networkidle', timeout=30000)
        await page.wait_for_timeout(3000)

        # Also grab the deployed commit hash from the page if possible
        await page.screenshot(path=OUT, full_page=False)

        await browser.close()
        print(f'Screenshot saved: {OUT}')

asyncio.run(main())
