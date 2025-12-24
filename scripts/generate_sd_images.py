#!/usr/bin/env python3
"""
LDASD Website - San Diego Image Generation Script
Uses Google Gemini Imagen 4.0 for photorealistic San Diego imagery
"""

from google import genai
from google.genai import types
from pathlib import Path
import time
import sys

# Configuration
API_KEY = "AIzaSyBx0rtNo9cmVjyIWkpxWp7yiv7xPHfNSQA"
OUTPUT_DIR = Path(__file__).parent.parent / "public" / "images" / "san-diego"

# Ensure output directory exists
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Initialize Gemini client
client = genai.Client(api_key=API_KEY)

# Image generation prompts for San Diego
IMAGE_PROMPTS = {
    "skyline": """Stunning documentary photograph of San Diego downtown skyline at golden hour, view from Coronado Island across San Diego Bay, iconic buildings including One America Plaza and Manchester Grand Hyatt, navy ships in harbor, palm trees framing the scene, warm sunset colors reflecting on calm bay waters. Shot on Sony FX9 with G Master 85mm f/1.4 at f/2.0, ISO 640, 1/250s, 8K resolution. Natural light, photorealistic, professional quality, cannot look AI-generated.""",

    "coronado-beach": """Beautiful documentary photograph of Coronado Beach at sunset with Hotel del Coronado's iconic red Victorian turrets and white wooden architecture visible in background, pristine sandy beach, gentle Pacific waves, romantic coastal California atmosphere. Professional lifestyle photography, warm trustworthy tones. Shot on Sony FX9 with G Master 85mm f/1.4 at f/2.0, ISO 640, 8K resolution. Photorealistic, cannot look AI-generated."""
}


def generate_image(prompt: str, output_path: Path, retries: int = 3) -> bool:
    """Generate an image using Gemini Imagen 4.0 and save to disk."""
    full_prompt = f"Generate an image: {prompt}"

    for attempt in range(retries):
        try:
            print(f"  Attempt {attempt + 1}/{retries}...")

            # Use Imagen 4.0 for highest quality photorealistic images
            response = client.models.generate_images(
                model='imagen-4.0-generate-001',
                prompt=full_prompt,
                config=types.GenerateImagesConfig(
                    number_of_images=1,
                    aspect_ratio='16:9',
                    safety_filter_level='BLOCK_LOW_AND_ABOVE',
                    person_generation='ALLOW_ADULT'
                )
            )

            if response.generated_images:
                image = response.generated_images[0]
                with open(output_path, 'wb') as f:
                    f.write(image.image.image_bytes)
                print(f"  [OK] Generated: {output_path.name} ({len(image.image.image_bytes):,} bytes)")
                return True

            print(f"  [WARN] No image returned for {output_path.name}")

        except Exception as e:
            error_msg = str(e)
            if "429" in error_msg or "RESOURCE_EXHAUSTED" in error_msg:
                wait_time = 60 * (attempt + 1)
                print(f"  [RATE] Rate limited, waiting {wait_time}s...")
                time.sleep(wait_time)
            else:
                print(f"  [ERROR] Attempt {attempt + 1}/{retries}: {error_msg[:200]}")
                if attempt < retries - 1:
                    wait_time = 5 * (attempt + 1)
                    print(f"  [WAIT] Waiting {wait_time}s before retry...")
                    time.sleep(wait_time)

    return False


def generate_all_images(force: bool = False):
    """Generate all San Diego images for LDASD website."""
    print("\n" + "=" * 70)
    print("LDASD WEBSITE - SAN DIEGO IMAGE GENERATION")
    print("Using Google Gemini Imagen 4.0")
    print("=" * 70)
    print(f"\nOutput directory: {OUTPUT_DIR}")
    print(f"Total images to generate: {len(IMAGE_PROMPTS)}")
    print(f"Force regenerate: {force}\n")

    success = 0
    total = len(IMAGE_PROMPTS)

    for i, (slug, prompt) in enumerate(IMAGE_PROMPTS.items(), 1):
        output_path = OUTPUT_DIR / f"{slug}.jpg"

        if output_path.exists() and not force:
            print(f"[{i}/{total}] Skipping {slug}.jpg (already exists, use --force to regenerate)")
            success += 1
            continue

        print(f"\n[{i}/{total}] Generating: {slug}.jpg")
        print(f"Prompt: {prompt[:100]}...")

        if generate_image(prompt, output_path):
            success += 1
        else:
            print(f"  [FAIL] Failed to generate {slug}.jpg")

        if i < total:
            print("  [WAIT] Waiting 15s before next request...")
            time.sleep(15)

    print("\n" + "=" * 70)
    print("GENERATION COMPLETE")
    print("=" * 70)
    print(f"Successfully generated: {success}/{total} images")
    print(f"\nImages saved to: {OUTPUT_DIR}")

    if success > 0:
        print("\nGenerated files:")
        for image_file in sorted(OUTPUT_DIR.glob("*.jpg")):
            size_kb = image_file.stat().st_size / 1024
            print(f"  - {image_file.name} ({size_kb:.1f} KB)")

    return success == total


def main():
    """Main entry point."""
    force = "--force" in sys.argv or "-f" in sys.argv

    if "--help" in sys.argv or "-h" in sys.argv:
        print("Usage:")
        print("  python generate_sd_images.py           # Generate missing images")
        print("  python generate_sd_images.py --force   # Regenerate all images")
        print("  python generate_sd_images.py --help    # Show this help")
        return

    generate_all_images(force=force)


if __name__ == "__main__":
    main()
