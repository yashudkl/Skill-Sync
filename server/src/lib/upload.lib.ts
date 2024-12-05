import multer from "multer";
import { v2 as cloudinary } from 'cloudinary';
import { STORAGE_NAME } from "./dbName";
import { Readable } from 'stream';
export const upload = multer({ storage: multer.memoryStorage() }).any();



export async function uploadPfpToCloud(userId: string, fileBuffer: Buffer): Promise<string> {
    return new Promise((resolve, reject) => {
        const folderPath = `${STORAGE_NAME}/user_pfps/${userId}`;
        const public_id = `${folderPath}/profile`;
        // Upload the new profile picture
        const uploadStream = cloudinary.uploader.upload_stream(
            { public_id, overwrite: true },
            (error, result) => {
                if (error) {
                    reject(error);
                } else if (result) {
                    resolve(result.secure_url);
                } else {
                    reject(new Error('Unknown error during upload'));
                }
            }
        );

        const readableStream = new Readable();
        readableStream.push(fileBuffer);
        readableStream.push(null);
        readableStream.pipe(uploadStream);
    })


}