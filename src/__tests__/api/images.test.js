const path = require('path')
const fs = require('fs');
const { uploadOneImage } = require('../../api/images');
const cloudinary = require('cloudinary');

cloudinary.config({ 
  cloud_name: 'abizmo', 
  api_key: '959994482336155', 
  api_secret: 'wUbtW42znEEFZ56YS2d5-2G4ypo' 
});

describe('Images API tests', () => {
  describe('uploadOneImage', () => {
    test('should return an url', async () => {
      const img = fs.readFileSync(path.join(__dirname,'../../fixtures/images','001.jpeg'))
      const file = new File([img], '001.jpeg');
      const url = await uploadOneImage(file);

      expect(typeof url).toBe('string');
      expect(url.startsWith('https://')).toBeTruthy();

      const segments = url.split('/');
      const imageId = segments[ segments.length - 1 ].split('.')[0];

      await (() => new Promise ((resolve, reject) => (
          cloudinary.v2.api.delete_resources(imageId, {}, () => {
            resolve();
          })
      )))()
    });
    
    test('should throw an error', async () => {
      const file = new File([], '001.jpeg');
      await expect(uploadOneImage(file)).rejects.toThrow(Error);
    });
  });
});
