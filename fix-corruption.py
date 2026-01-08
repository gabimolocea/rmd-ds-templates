#!/usr/bin/env python3
"""
Fix ALL corruption in App.tsx by systematically removing ' />' that appears
after event handlers and before '>' closing tags.
"""

def fix_app_tsx():
    filepath = '/Users/gabimolocea/rmd-ds-templates/src/App.tsx'
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern 1: Fix onChange={(e) => something(e.target.value)} />
    #              placeholder="..."
    # Should be: onChange={(e) => something(e.target.value)}
    #            placeholder="..."
    import re
    
    # Fix event handlers with } /> on same line
    content = re.sub(r'onChange=\{([^}]+)\} />', r'onChange={\1}', content)
    content = re.sub(r'onClick=\{([^}]+)\} />', r'onClick={\1}', content)
    content = re.sub(r'onBlur=\{([^}]+)\} />', r'onBlur={\1}', content)
    content = re.sub(r'onFocus=\{([^}]+)\} />', r'onFocus={\1}', content)
    content = re.sub(r'onSelect=\{([^}]+)\} />', r'onSelect={\1}', content)
    content = re.sub(r'onDateChange=\{([^}]+)\} />', r'onDateChange={\1}', content)
    
    # Fix buttons with broken structure:
    # onClick={() => setSize('small')} />
    #   >
    #     Small
    #   </button>
    # Should be: onClick={() => setSize('small')}>
    #              Small
    #            </button>
    content = re.sub(r"(\w+)=\{([^}]+)\} />\s+>\s+", r'\1={\2}>\n                ', content)
    
    # Fix input placeholders that ended up on wrong line:
    # onChange={(e) => setLabel(e.target.value)} />
    #   placeholder="Button label"
    # />
    # Should be: onChange={(e) => setLabel(e.target.value)}
    #            placeholder="Button label"
    #          />
    lines = content.split('\n')
    fixed_lines = []
    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Check if this line has a broken event handler
        if re.search(r'(onChange|onClick|onBlur)=\{[^}]+\} />\s*$', line):
            # Remove the } />
            line = re.sub(r'\} />\s*$', '}', line)
            # Check if next line is a placeholder or other attribute
            if i + 1 < len(lines) and re.search(r'^\s+(placeholder|value|className|type)=', lines[i + 1]):
                # Keep both, the next attribute will close the tag
                pass
        
        fixed_lines.append(line)
        i += 1
    
    content = '\n'.join(fixed_lines)
    
    # One more pass: fix } /> /> double closing
    content = content.replace('} />\n            />', '\n            />')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Fixed App.tsx")

if __name__ == '__main__':
    fix_app_tsx()
