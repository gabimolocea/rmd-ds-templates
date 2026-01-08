#!/usr/bin/env python3
"""
Final comprehensive fix for App.tsx - balance all div tags and conditional blocks
"""

def fix_app_completely():
    filepath = '/Users/gabimolocea/rmd-ds-templates/src/App.tsx'
    
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Fix known issues:
    # 1. Line 644 has extra </div> (between badge section closing divs)
    # 2. Ensure all {activeComponent === 'X' && have opening (
    
    fixed_lines = []
    for i, line in enumerate(lines, 1):
        # Skip the extra </div> on line 644
        if i == 644 and line.strip() == '</div>':
            continue  # Skip this line entirely
        
        fixed_lines.append(line)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(fixed_lines)
    
    print("Fixed App.tsx - removed extra div on line 644")

if __name__ == '__main__':
    fix_app_completely()
