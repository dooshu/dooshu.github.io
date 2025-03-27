function generateMenuJsonString(title, childCount) {
    const childItems = [];
    
    for (let i = 1; i <= childCount; i++) {
      childItems.push(
        `    { "slug": "${title}/${i}", "title": "${i}", "open": true }`
      );
    }
    
    return `{
    "slug": "${title}",
    "title": "${title}",
    "child": [
  ${childItems.join(",\n")}
    ]
  }`;
  }
  
  // 使用示例
  const jsonString = generateMenuJsonString("/yi/407", 63);
  console.log(jsonString);