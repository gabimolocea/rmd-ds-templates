#!/usr/bin/env python3
import re

with open('src/App.tsx', 'r') as f:
    lines = f.readlines()

# Focus on badge section (lines 501-644)
start_line = 500  # 0-indexed, so line 501
end_line = 644

stack = []
for i in range(start_line, end_line):
    line = lines[i]
    line_num = i + 1
    
    # Find all opening <div tags
    for match in re.finditer(r'<div\s', line):
        stack.append(line_num)
    
    # Find all closing </div> tags
    for match in re.finditer(r'</div>', line):
        if stack:
            stack.pop()
        else:
            print(f"Line {line_num}: Extra closing div (no matching open)")

print(f"\nUnclosed divs in badge section:")
for line_num in stack:
    print(f"  Line {line_num}: {lines[line_num-1].strip()}")

print(f"\nTotal unclosed: {len(stack)}")
