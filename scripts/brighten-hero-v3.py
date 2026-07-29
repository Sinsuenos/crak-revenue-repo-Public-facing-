#!/usr/bin/env python3
"""Boost hero-bg.png brightness further - apply 1.5x to current (62.8 → ~94 mean)."""
from PIL import Image, ImageEnhance
import numpy as np

src = '/home/z/my-project/public/hero-bg.png'
img = Image.open(src)

arr_before = np.array(img)
print(f'Before: mean brightness = {arr_before.mean():.1f}/255')

# 1.5x boost on current 62.8 → ~94 mean
enhancer = ImageEnhance.Brightness(img)
bright = enhancer.enhance(1.5)
bright.save(src, 'PNG')

arr_after = np.array(bright)
print(f'After:  mean brightness = {arr_after.mean():.1f}/255')
