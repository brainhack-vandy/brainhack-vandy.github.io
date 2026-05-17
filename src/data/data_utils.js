import liveIssues from "./issues.json"
import snapshotIssues from "./issues-snapshot2025.json"

// 2025 is frozen: project cards for 2025 come exclusively from the committed
// snapshot, never from the live workflow fetch. Any live issue labeled "2025"
// (reopened, edited, or newly tagged) is ignored so the archive stays stable.
// 2026+ continues to render from the live fetch as before.
const isFrozenYear = (issue) =>
  issue.labels.some((label) => label.name === '2025');
const issues = [
  ...liveIssues.filter((i) => !isFrozenYear(i)),
  ...snapshotIssues,
];

function processIssues(issues) {
    const projects = {
      2024: [],
      2025: [],
      2026: [],
    };
    issues.forEach((issue) => {
      // Check if the issue has the "approved" label
      const hasApprovedLabel = issue.labels.some(
        (label) => label.name === 'approved'
      );
      if (!hasApprovedLabel) {
        return; 
      }

      let yearLabel = null;
      issue.labels.forEach((label) => {
        if (/^\d{4}$/.test(label.name)) {
            yearLabel = parseInt(label.name, 10);
        }
      });
      if (!yearLabel) {
        return;
      }
  
      
      const body = issue.body || '';
  
      // Initialize variables
      let infoLink = null;
      let imageLink = null;
      let description = null;
      let title = null;
  
      // Regular expressions
      const linkRegex = /### Link to project repository\/sources([\s\S]*?)###/;
      const imageRegex = /### Image\s*!\[.*?\]\((.*?)\)/;
      const iamgeHTMLRegex = /<img[^>]*src="(.*?)"/;

      const descriptionRegex = /### Project Summary([\s\S]*?)###/;

      const titleRegex = /### Title([\s\S]*?)###/;
  
      // Extract image link
      const imageMatch = imageRegex.exec(body);
      const imageHTMLMatch = iamgeHTMLRegex.exec(body);

      if (imageMatch) {
        imageLink = imageMatch[1].trim(); // The URL is in the second capturing 
      }
      else if (imageHTMLMatch) {
        imageLink = imageHTMLMatch[1].trim();
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


      const titleMatch = titleRegex.exec(body);
      if (titleMatch) {
          title = titleMatch[1].trim();
      }

      
      const project = {
        title: title,
        description: description,
        ghLink: infoLink,
        imgPath: imageLink,
        issueLink: `https://github.com/brainhack-vandy/brainhack-vandy.github.io/issues/${issue.number}`,
      };
  
      if (!projects[yearLabel]) {
        projects[yearLabel] = [];
      }
      projects[yearLabel].push(project);
    });
    console.log(projects);
    return projects;
  }

export default  processIssues(issues);
