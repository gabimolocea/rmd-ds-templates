/**
 * Icon loader utility
 * Dynamically imports SVG files from the icons directory
 */

// Vite's glob import for SVG files
const iconModules = import.meta.glob<{ default: string }>('./icons/🎨 Foundation/*.svg', {
  query: '?raw',
  eager: false,
});

/**
 * Cache for loaded icons
 */
const iconCache = new Map<string, string>();

/**
 * Loads an SVG icon and replaces hard-coded colors with currentColor
 * @param name - The icon name (filename without extension)
 * @returns Promise<string> - The SVG content as a string
 */
export async function loadIcon(name: string): Promise<string | null> {
  // Check cache first
  if (iconCache.has(name)) {
    return iconCache.get(name)!;
  }

  // Try to find the icon file
  const iconPath = `./icons/🎨 Foundation/${name}.svg`;
  const loader = iconModules[iconPath];

  if (!loader) {
    console.warn(`Icon "${name}" not found in icons directory`);
    return null;
  }

  try {
    // Load the SVG content
    const module = await loader();
    let svgContent = module.default;

    // Replace hard-coded colors with currentColor for theming
    svgContent = svgContent
      .replace(/stroke="#[0-9A-Fa-f]{6}"/g, 'stroke="currentColor"')
      .replace(/fill="#[0-9A-Fa-f]{6}"/g, 'fill="currentColor"')
      .replace(/<svg[^>]*>/, (match: string) => {
        // Remove width and height from the SVG tag (we'll control this via props)
        return match.replace(/\s*(width|height)="[^"]*"/g, '');
      });

    // Cache the processed SVG
    iconCache.set(name, svgContent);
    return svgContent;
  } catch (error) {
    console.error(`Error loading icon "${name}":`, error);
    return null;
  }
}

/**
 * Preload commonly used icons
 */
export async function preloadIcons(iconNames: string[]): Promise<void> {
  await Promise.all(iconNames.map((name) => loadIcon(name)));
}

/**
 * Get all available icon names from the icons directory
 */
export function getAvailableIcons(): string[] {
  return Object.keys(iconModules).map((path) => {
    const match = path.match(/\/([^/]+)\.svg$/);
    return match ? match[1] : '';
  }).filter(Boolean);
}
