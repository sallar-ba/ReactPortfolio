export const getImageUrl = (path) => {
    // Assuming images are in the public folder
    return process.env.PUBLIC_URL + `/assets/${path}`;
  };
  