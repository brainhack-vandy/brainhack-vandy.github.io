import issues from "./issues.json"

function processIssues(issues) {
    const projects = [];
    issues.forEach((issue) => {
      // Check if the issue has the "approved" label
      const hasApprovedLabel = issue.labels.some(
        (label) => label.name === 'approved'
      );
      if (!hasApprovedLabel) {
        return; // Skip this issue if it's not approved
      }
  
      const title = issue.title;
      const body = issue.body || '';
  
      // Initialize variables
      let infoLink = null;
      let imageLink = null;
      let description = null;
  
      // Regular expressions
      const linkRegex = /### Link to project repository\/sources\n\n([\s\S]*?)\n\n###/;
    const imageRegex = /### Image\n\n!\[.*?\]\((.*?)\)/;
      const descriptionRegex = /### Project Description\n\n([\s\S]*?)\n\n###/;
  
      // Extract image link
      const imageMatch = imageRegex.exec(body);
      if (imageMatch) {
        imageLink = imageMatch[1].trim(); // The URL is in the second capturing 
      }
  
      // Extract info link
      const linkMatch = linkRegex.exec(body);
      if (linkMatch && linkMatch[1] !== '_No response_') {
        infoLink = linkMatch[1].trim();
      }
  
      const descriptionMatch = descriptionRegex.exec(body);
        if (descriptionMatch) {
            description = descriptionMatch[1].trim();
        }

      const project = {
        title: title,
        description: description,
        ghLink: infoLink,
        imgPath: imageLink,
      };
  
      projects.push(project);
    });
    console.log(projects);
    return projects;
  }

export default {
    2024: processIssues(issues),
}
