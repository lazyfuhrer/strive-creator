import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  signatureVersion: process.env.NEXT_PUBLIC_AWS_SIGNATURE_VERSION,
});

const s3 = new AWS.S3();

export const UploadImageToS3 = async (
  file: File,
) => {

  const params: AWS.S3.PutObjectRequest = {
    Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME as string,
    Key: `${Date.now()}.${file.name}`,
    Body: file,
  };

  try {
    const { Location } = await s3.upload(params).on('httpUploadProgress', () => {}).promise();
    return Location;
  } catch (error) {
    console.error('Error uploading to S3:', error);
  }
};