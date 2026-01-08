#!/usr/bin/env python3
"""
Fix the corrupted App.tsx file by removing incorrectly placed ' />' after function calls.
"""

import re

def fix_app_tsx(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Pattern 1: Fix onChange={(e) => something(e.target.value)} /> back to )}
    content = re.sub(r'\(e\) => (\w+)\(e\.target\.(\w+)\)\} />', r'(e) => \1(e.target.\2)}', content)
    
    # Pattern 2: Fix onClick={() => something()} /> back to )}
    content = re.sub(r'\(\) => ([^}]+)\(\)\} />', r'() => \1()}', content)
    
    # Pattern 3: Fix onClick={() => something('value')} /> back to )}
    content = re.sub(r"onClick=\{\\(\) => ([^}]+)\\('([^']+)'\\)\} />", r"onClick={() => \1('\2')}", content)
    
    # Pattern 4: Fix any remaining patterns like value={something}} />
    content = re.sub(r'(\w+)=\{([^}]+)\}\} />', r'\1={\2}}', content)
    
    # Pattern 5: Fix checked={something}} />
    content = re.sub(r'checked=\{([^}]+)\}\} />', r'checked={\1}}', content)
    
    # Pattern 6: Fix placeholder after onChange
    # Find: onChange={(e) => setLabel(e.target.value)} />
    #       placeholder="Button label"
    #     />
    # Replace with proper structure
    content = re.sub(
        r'onChange=\{([^}]+)\}\s*/>\s*placeholder="([^"]+)"\s*/>', 
        r'onChange={\1}\n              placeholder="\2"\n            />',
        content
    )
    
    # Pattern 7: Fix button elements: onClick={() => setSize('small')} />
    #                                  >
    #                                  Small
    #                                </button>
    content = re.sub(
        r'(onClick=\{[^}]+\})\s*/>\s*>\s*\n\s*([^<]+)\n\s*</button>',
        r'\1>\n                \2\n              </button>',
        content
    )
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {filepath}")
        return True
    else:
        print("No changes needed")
        return False

if __name__ == '__main__':
    fix_app_tsx('/Users/gabimolocea/rmd-ds-templates/src/App.tsx')
