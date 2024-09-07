import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(req: NextRequest, { params }: { params: { imageName: string } }) {
  const { imageName } = params;

  // Define the path to the images folder in the public directory
  const imagePath = path.join(process.cwd(),'src', 'public', 'images', imageName);
  console.log(imagePath);
  try {
    // Read the image file from the file system
    const image = await fs.readFile(imagePath);

    // Set the correct content-type based on the image extension
    const contentType = imageName.endsWith('.png')
      ? 'image/png'
      : imageName.endsWith('.jpg') || imageName.endsWith('.jpeg')
      ? 'image/jpeg'
      : 'application/octet-stream';

    return new NextResponse(image, {
      headers: {
        'Content-Type': contentType,
      },
    });
  } catch (error) {
    return new NextResponse('Image not found', { status: 404 });
  }
}
