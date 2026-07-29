#!/usr/bin/env python3
"""Boost the CORRECT hero-bg.png tracked by git."""

from PIL import Image, ImageEnhance
import numpy as np

src = '/home/z/my-project/public/hero-bg.png'
img = Image.open(src)

arr_before = np.array(img)
print(f'Before: mean brightness = {arr_before.mean():.1f}/255')

enhancer = ImageEnhance.Brightness(img)
bright = enhancer.enhance(1.33)
bright.save(src, 'PNG')

arr_after = np.array(bright)
print(f'After:  mean brightness = {arr_after.mean():.1f}/255')
print(f'Boost: 1.33x')
