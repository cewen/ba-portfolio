import { createClient } from 'contentful'

const api = createClient({
  space: `${process.env.REACT_APP_SPACE_ID}`,
  accessToken: `${process.env.REACT_APP_API_ACCESS_TOKEN}`,
});

export default api;
