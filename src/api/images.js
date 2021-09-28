const BASE_URL = process.env.REACT_APP_BASE_URL;
const UPLOAD_PRESET = process.env.REACT_APP_UPLOAD_PRESET;

export const uploadOneImage = (file) => {
  const formData = new FormData();
  formData.append('upload_preset', UPLOAD_PRESET);
  formData.append('file', file);

  return fetch(`${BASE_URL}/upload`, {
    method: 'POST',
    body: formData,
  })
  .then((res) => res.json())
  .then(({ error, secure_url }) => {
    if (error) {
      throw new Error(error.message);
    }
    return secure_url;
  })
}