import re
import os

files = [
    ("app/edgecompute/page.tsx", "../../"),
    ("app/industries/research-education/page.tsx", "../../../"),
    ("app/industries/wildlife/page.tsx", "../../../"),
    ("app/research-education/page.tsx", "../../"),
    ("app/simulation/gpsdenied/page.tsx", "../../../"),
    ("app/simulation/realityengine/page.tsx", "../../../"),
    ("app/systems/edgecompute/page.tsx", "../../../")
]

for filepath, up_path in files:
    if not os.path.exists(filepath):
        print(f"Missing {filepath}")
        continue
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Extract metadata
    meta_title_match = re.search(r"title:\s*'([^']+)'", content)
    meta_desc_match = re.search(r"description:\s*'([^']+)'", content)
    meta_title = meta_title_match.group(1) if meta_title_match else ""
    meta_desc = meta_desc_match.group(1) if meta_desc_match else ""
    
    # Component name
    comp_name_match = re.search(r"export default function (\w+)\s*\(", content)
    comp_name = comp_name_match.group(1) if comp_name_match else "Page"
    
    # Main title
    h1_match = re.search(r'<h1[^>]*>\s*(.*?)\s*</h1>', content, re.DOTALL)
    main_title = h1_match.group(1).strip() if h1_match else ""
    
    # Subtitle (first h3)
    h3_matches = re.findall(r'<h3[^>]*>\s*(.*?)\s*</h3>', content, re.DOTALL)
    subtitle = h3_matches[0].strip() if h3_matches else ""
    
    # Paragraphs
    p_matches = re.findall(r'<p className="partners-desc[^>]*>\s*(.*?)\s*</p>', content, re.DOTALL)
    
    # Sections (rest of h3s)
    sections = []
    # we can find ul tags following h3 tags
    for i in range(1, len(h3_matches)):
        section_title = h3_matches[i].strip()
        # Find the block between this h3 and next h3 (or end)
        start_idx = content.find(h3_matches[i])
        end_idx = content.find(h3_matches[i+1]) if i+1 < len(h3_matches) else len(content)
        block = content[start_idx:end_idx]
        
        ul_match = re.search(r'<ul[^>]*>(.*?)</ul>', block, re.DOTALL)
        items = []
        if ul_match:
            li_matches = re.findall(r'<li>(.*?)</li>', ul_match.group(1), re.DOTALL)
            items = [li.strip() for li in li_matches]
        
        sections.append((section_title, items))
        
    # Build new content
    new_content = f"""import CompanyPageLayout from '{up_path}components/CompanyPageLayout';

export const metadata = {{
  title: '{meta_title}',
  description: '{meta_desc}',
}};

export default function {comp_name}() {{
  return (
    <CompanyPageLayout
      title="{main_title}"
      subtitle="{subtitle}"
      paragraphs={{[
"""
    for p in p_matches:
        p_clean = p.replace("'", "\\'")
        new_content += f"        '{p_clean}',\n"
    
    new_content += "      ]}\n      sections={[\n"
    
    for sec_title, items in sections:
        new_content += f"        {{\n          title: '{sec_title}',\n          items: [\n"
        for item in items:
            item_clean = item.replace("'", "\\'")
            new_content += f"            '{item_clean}',\n"
        new_content += "          ],\n        },\n"
        
    new_content += "      ]}\n    />\n  );\n}\n"
    
    with open(filepath, 'w') as f:
        f.write(new_content)
        
    print(f"Updated {filepath}")

