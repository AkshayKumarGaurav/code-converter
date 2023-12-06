export function parseGithubLink(link) {
    const parts = link.split("/");
    const repositoryOwner = parts[3];
    const repositoryName = parts[4];
    const filePath = parts.slice(7).join("/");
  
    return { repositoryName, repositoryOwner, filePath };
  }
  
  //Github link validation
  export const isValidGithubLink = (link) => {
    const githubUrlRegex =
      /https:\/\/github\.com\/[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+/;
    return githubUrlRegex.test(link);
  };