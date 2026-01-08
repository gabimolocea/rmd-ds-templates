#!/usr/bin/env python3
"""
Fix the corrupted App.tsx by reversing the sed damage.
The corruption was: sed -i '' 's/)}/} \\/>/g' which replaced ALL )} with } />
We need to reverse this ONLY where it doesn't belong (not JSX self-closing tags).
"""

import re

def fix_corrupted_tsx():
    filepath = '/Users/gabimolocea/rmd-ds-templates/src/App.tsx'
    
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    fixed_lines = []
    
    for i, line in enumerate(lines):
        fixed_line = line
        
        # Pattern 1: Fix callback functions
        # onChange={(e) => something} /> should be onChange={(e) => something)}
        fixed_line = re.sub(r'onChange=\{([^}]+)\} />', r'onChange={\1)}', fixed_line)
        fixed_line = re.sub(r'onClick=\{([^}]+)\} />', r'onClick={\1)}', fixed_line)
        fixed_line = re.sub(r'onBlur=\{([^}]+)\} />', r'onBlur={\1)}', fixed_line)
        fixed_line = re.sub(r'onFocus=\{([^}]+)\} />', r'onFocus={\1)}', fixed_line)
        fixed_line = re.sub(r'onSelect=\{([^}]+)\} />', r'onSelect={\1)}', fixed_line)
        
        # Pattern 2: Fix multi-line button structures
        # onClick={() => setSize('small')} />
        # >
        # Should be: onClick={() => setSize('small')}>
        if line.strip().endswith('} />') and i + 1 < len(lines) and lines[i + 1].strip() == '>':
            # This is a button/element that has content on next lines
            fixed_line = re.sub(r'\} />\s*$', '}>', fixed_line)
        
        # Pattern 3: Fix misplaced attributes
        # onChange={(e) => setLabel(e.target.value)} />
        #   placeholder="..."
        # />
        # Should have placeholder inline
        if re.search(r'value\} />\s*$', line) and i + 1 < len(lines):
            next_line = lines[i + 1]
            if 'placeholder=' in next_line:
                # Combine them
                fixed_line = re.sub(r'value\} />\s*$', 'value)}', fixed_line)
        
        fixed_lines.append(fixed_line)
    
    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(fixed_lines)
    
    print("Fixed App.tsx")

if __name__ == '__main__':
    fix_corrupted_tsx()
