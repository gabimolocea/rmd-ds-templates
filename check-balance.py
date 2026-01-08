#!/usr/bin/env python3
"""
Find JSX tag imbalances in App.tsx
"""

def find_imbalance():
    filepath = '/Users/gabimolocea/rmd-ds-templates/src/App.tsx'
    
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    stack = []
    
    for i, line in enumerate(lines, 1):
        # Count opening divs
        opening_divs = line.count('<div')
        closing_divs = line.count('</div>')
        
        for _ in range(opening_divs):
            stack.append(('div', i))
        for _ in range(closing_divs):
            if stack and stack[-1][0] == 'div':
                stack.pop()
            else:
                print(f"Line {i}: Extra closing </div>: {line.strip()}")
    
    if stack:
        print("\nUnclosed divs:")
        for tag, line_num in stack:
            print(f"  Line {line_num}: {lines[line_num-1].strip()}")
    else:
        print("All divs balanced!")

if __name__ == '__main__':
    find_imbalance()
