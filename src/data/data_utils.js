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
      let description = body;
  
      // Regular expressions
      const imageRegex = /!\[(.*?)\]\((.*?)\)/g;
      const linkRegex = /\[(https?:\/\/[^\]]+)\]\(url\)/g;
  
      // Extract image link
      const imageMatch = imageRegex.exec(body);
      if (imageMatch) {
        imageLink = imageMatch[2]; // The URL is in the second capturing group
        // Remove the image Markdown from the description
        description = description.replace(imageMatch[0], '');
      }
  
      // Extract info link
      const linkMatch = linkRegex.exec(body);
      if (linkMatch) {
        infoLink = linkMatch[1]; // The URL is in the link text
        // Remove the link Markdown from the description
        description = description.replace(linkMatch[0], '');
      }
  
      // Remove any remaining Markdown links or images from the description
      description = description.replace(imageRegex, '');
      description = description.replace(linkRegex, '');
  
      // Trim the description
      description = description.trim();
  
      // Create the Project object
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
