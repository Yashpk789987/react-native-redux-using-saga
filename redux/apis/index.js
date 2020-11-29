export const fetchData = async (url) => {
  try {
    const response = await fetch("https://randomuser.me" + url);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
