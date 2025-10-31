import { Client, ID, Storage } from "appwrite";
import conf from "../conf/conf";

class StorageService {
  client = new Client();
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectID);

    this.bucket = new Storage(this.client);
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile({
        bucketId: conf.appwriteBucketID,
        fileId: ID.unique(),
        file: file,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async getFile(fileId) {
    try {
      return await this.bucket.getFile({
        bucketId: conf.appwriteBucketID,
        fileId: fileId,
      });
    } catch (error) {
      console.log(error);
    }
  }

  downloadFile(fileId) {
    try {
      return this.bucket.getFileDownload({
        bucketId: conf.appwriteBucketID,
        fileId: fileId,
        
      });
    } catch (error) {
      console.log(error);
    }
  }

  updateFile(fileId) {
    try {
      return this.bucket.updateFile({
        bucketId: conf.appwriteBucketID,
        fileId: fileId,
        
      });
    } catch (error) {
      console.log(error);
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile({
        bucketId: conf.appwriteBucketID,
        fileId: fileId,
      });
    } catch (error) {
      console.log(error);
    }
  }

  
}

const storageService = new StorageService();

export default storageService;
