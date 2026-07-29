#!/usr/bin/env python3
"""Boost hero-bg.png brightness by ~33% cumulatively."""

from PIL import Image, ImageEnhance
import numpy as np

src = '/home/z/my-project/crak-revenue-repo-Public-facing-/public/hero-bg.png'
img = Image.open(src)

arr_before = np.array(img)
print(f'Before: mean brightness = {arr_before.mean():.1f}/255')

enhancer = ImageEnhance.Brightness(img)
bright = enhancer.enhance(1.33)
bright.save(src, 'PNG')

arr_after = np.array(bright)
print(f'After:  mean brightness = {arr_after.mean():.1f}/255')
print(f'Boost: 1.33x (cumulative ~1.77x from original)')
