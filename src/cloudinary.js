// src/cloudinary.js
const cloudinaryConfig = {
  cloudName: 'dkv2ks2ik', // Get from Cloudinary dashboard
  uploadPreset: 'khushi' // Create in Cloudinary settings
};

export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', cloudinaryConfig.uploadPreset);
  
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );
    
    if (!response.ok) {
      throw new Error('Upload failed');
    }
    
    const data = await response.json();
    return data.secure_url; // Return the image URL
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
};