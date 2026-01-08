# RMD Design System Templates

This project connects to Figma via MCP (Model Context Protocol) to create and manage design system components.

## Setup

### 1. Get Your Figma Access Token

1. Go to [Figma Account Settings](https://www.figma.com/settings)
2. Scroll down to "Personal Access Tokens"
3. Click "Generate new token"
4. Give it a name (e.g., "MCP Design System")
5. Copy the token

### 2. Configure Environment

1. Open `.env` file in this project
2. Add your Figma access token:
   ```
   FIGMA_ACCESS_TOKEN=your_actual_token_here
   ```

### 3. Connect VS Code Figma Extension

The official Figma extension is already installed in VS Code. To connect it:

1. Open VS Code Command Palette (`Cmd+Shift+P`)
2. Type "Figma: Login" and select it
3. Follow the authentication flow to connect your Figma account

Alternatively, you can configure it manually:
1. Go to VS Code Settings (`Cmd+,`)
2. Search for "Figma"
3. Add your Figma Personal Access Token in the settings

The extension will allow you to:
- Browse Figma files directly in VS Code
- Inspect designs and get code suggestions
- Copy design tokens and styles
- Receive notifications from Figma

## Usage

### Using VS Code Figma Extension

1. **Open Figma Panel**: `Cmd+Shift+P` → "Figma: Open"
2. **Browse Files**: View your Figma files and pages
3. **Inspect Designs**: Click on any design to see properties and code
4. **Copy Styles**: Extract colors, typography, spacing, etc.
5. **Get Code Suggestions**: The extension provides React, CSS, and other code snippets

### Working with Design Tokens

Once you've identified your design system in Figma:
1. Use the Figma extension to inspect components and styles
2. Copy design tokens (colors, typography, spacing)
3. Add them to [src/tokens/index.ts](src/tokens/index.ts)
4. Build your component library based on the tokens

## Project Structure

```
rmd-ds-templates/
├── .env                 # Your Figma access token (optional, not committed)
├── .env.example         # Example environment file
├── package.json         # Node dependencies
├── src/
│   ├── components/      # Design system components
│   └── tokens/          # Design tokens (colors, typography, etc.)
├── scripts/             # Utility scripts
└── README.md           # This file
```

## Next Steps

1. **Connect Figma Extension:**
   - Open Command Palette (`Cmd+Shift+P`)
   - Run "Figma: Login"
   - Authenticate with your Figma account

2. **Select Your Design System File:**
   - Open the Figma panel in VS Code
   - Browse to your design system file
   - Inspect components and extract design tokens

3. **Start Building:**
   - Extract design tokens to [src/tokens/index.ts](src/tokens/index.ts)
   - Create components in [src/components/](src/components/)
   - Use the Figma extension for code suggestions

## Resources

- [Figma for VS Code Extension](https://www.figma.com/community/plugin/vscode)
- [Figma API Documentation](https://www.figma.com/developers/api)
- [Design Tokens Guide](https://www.designtokens.org/)
