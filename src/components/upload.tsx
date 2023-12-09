import React, { useState, ChangeEvent } from 'react';
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_REGION,
  signatureVersion: 'v4',
});

export default function ImageUploader() {
  const s3 = new AWS.S3();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const uploadToS3 = async () => {
    if (!file) {
      return;
  }

    const params: AWS.S3.PutObjectRequest = {
      Bucket: 'utilitymarket',
      Key: `${Date.now()}.${file.name}`,
      Body: file,
    };

    try {
      const { Location } = await s3.upload(params).on('httpUploadProgress', (e) => {
        setProgress(Math.round((e.loaded / e.total) * 100));
      }).promise();

      setImageUrl(Location);
      console.log('uploading to s3', Location);
    } catch (error) {
      console.error('Error uploading to S3:', error);
    }
  };

  return (
    <div>
      <h1>Test Image Upload</h1>
      <div>Native SDK File Upload Progress is {progress}%</div>
      <input type="file" onChange={handleFileSelect} />
      {file && (
        <div style={{ marginTop: '10px' }}>
          <button onClick={uploadToS3}>Upload</button>
        </div>
      )}
      {imageUrl && (
        <div style={{ marginTop: '10px' }}>
          <img style={{ height: '300px' }} src={imageUrl} alt="uploaded" />
        </div>
      )}
    </div>
  );
}