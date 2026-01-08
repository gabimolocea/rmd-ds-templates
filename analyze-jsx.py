#!/usr/bin/env python3
import re

with open('src/App.tsx', 'r') as f:
    lines = f.readlines()

stack = []
errors = []

for i, line in enumerate(lines, 1):
    # Find opening tags
    opens = re.findall(r'<(\w+)(?:\s|>|/)', line)
    # Find closing tags
    closes = re.findall(r'</(\w+)>', line)
    # Find self-closing tags (to ignore)
    self_closing = re.findall(r'<\w+[^>]*/>', line)
    
    # Process opens
    for tag in opens:
        # Check if it's self-closing
        if not any(f'<{tag}' in sc for sc in self_closing):
            stack.append((tag, i))
    
    # Process closes
    for tag in closes:
        if not stack:
            errors.append(f"Line {i}: Unexpected closing </{tag}> - no matching opening tag")
        elif stack[-1][0] != tag:
            expected = stack[-1][0]
            errors.append(f"Line {i}: Found </{tag}> but expected </{expected}> (opened at line {stack[-1][1]})")
        else:
            stack.pop()

print("Unclosed tags:")
for tag, line_num in stack:
    print(f"  Line {line_num}: <{tag}>")

if errors:
    print("\nMismatched tags:")
    for error in errors[:20]:  # Limit to first 20 errors
        print(f"  {error}")

print(f"\nTotal unclosed: {len(stack)}")
print(f"Total mismatched: {len(errors)}")
