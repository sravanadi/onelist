import os
from PIL import Image, ImageDraw, ImageFont

icons = {
    'movies': ('🎬', '#FACC15'),
    'anime': ('🎎', '#4ADE80'),
    'manga': ('📖', '#F472B6'),
    'sports': ('🏈', '#FB923C'),
    'livetv': ('📺', '#60A5FA'),
    'torrents': ('🧲', '#E5E7EB'),
    'games': ('🎮', '#FACC15'),
    'music': ('🎸', '#FACC15'),
    'ebooks': ('📔', '#E5E7EB'),
    'comics': ('🗯️', '#F87171'),
    'asiandrama': ('🎭', '#FACC15'),
    'adult': ('🔞', '#F87171'),
    'vpn': ('🛡️', '#F472B6'),
    'adblockers': ('🚫', '#60A5FA'),
    'newsites': ('⚡', '#A78BFA')
}

out_dir = "public/icons"
os.makedirs(out_dir, exist_ok=True)

for name, (emoji, color) in icons.items():
    img = Image.new('RGBA', (128, 128), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    # Background circle
    d.ellipse((0, 0, 128, 128), fill=None, outline=color, width=4)
    # To get proper emoji rendering without a heavy font, we'll try standard fonts fallback
    # Normally PIL struggles with color emojis, so let's just make text emojis big
    try:
        font = ImageFont.truetype("seguiemj.ttf", 64)
    except:
        font = ImageFont.load_default(size=48)
    
    # Calculate text bounding box to center it
    bbox = d.textbbox((0, 0), emoji, font=font)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]
    d.text(((128-w)/2, (128-h)/2 - 10), emoji, font=font, fill=color)
    
    img.save(f"{out_dir}/{name}.png")

print("Icons generated.")
