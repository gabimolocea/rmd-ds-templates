#!/usr/bin/env python3
"""
Fix all remaining corruption in App.tsx
"""
import re

def fix_app_tsx():
    filepath = '/Users/gabimolocea/rmd-ds-templates/src/App.tsx'
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix Breadcrumbs components with broken closing
    # <Breadcrumbs items={[{ label: 'Link', href: '#' }])}
    # Should be: <Breadcrumbs items={[{ label: 'Link', href: '#' }]} />
    content = re.sub(r'<Breadcrumbs ([^>]+)\)}\s*\n', r'<Breadcrumbs \1} />\n', content)
    
    # Fix multi-line arrays with broken closing
    # ])}
    # Should be: ]} />
    lines = content.split('\n')
    fixed_lines = []
    for i, line in enumerate(lines):
        # Check if this line has ])}} which should be ]} />
        if re.match(r'^\s+\]\)}\s*$', line):
            # Check context - if previous lines have items={[
            look_back = 5
            has_items = False
            for j in range(max(0, i - look_back), i):
                if 'items={[' in lines[j]:
                    has_items = True
                    break
            if has_items:
                line = re.sub(r'\]\)}', ']} />', line)
        fixed_lines.append(line)
    
    content = '\n'.join(fixed_lines)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Fixed App.tsx breadcrumbs and arrays")

if __name__ == '__main__':
    fix_app_tsx()
