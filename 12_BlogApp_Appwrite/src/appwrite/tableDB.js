import conf from "../conf/conf";
import { Client, TablesDB, Storage, Query } from "appwrite";

export class TableDBService {
  client = new Client();
  tablesDB;

  constructor() {
    this.client
      .setProject(conf.appwriteProjectID) // Your project ID
      .setEndpoint(conf.appwriteURL)

    this.tablesDB = new TablesDB(this.client);
  }

  async createPost(rowId, { title, content, status, featuredImage}) {
    try {
      return await this.tablesDB.createRow({
        databaseId: conf.appwriteDatabaseID,
        tableId: conf.appwriteTableID,
        rowId: rowId,
        data: {
          title,
          content,
          status,
          featuredImage,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async listPost(queries = [Query.equal("status", ["active"])]) {
    try {
      return await this.tablesDB.listRows({
        databaseId: conf.appwriteDatabaseID,
        tableId: conf.appwriteTableID,
        queries: queries,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getPost(rowId) {
    try {
      return await this.tablesDB.getRow({
        databaseId: conf.appwriteDatabaseID,
        tableId: conf.appwriteTableID,
        rowId: rowId,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async updatePost(rowId, {title, content, status, featuredImage}) {
    try {
      return await this.tablesDB.updateRow({
        databaseId: conf.appwriteDatabaseID,
        tableId: conf.appwriteTableID,
        rowId: rowId,
        data: {
          title,
          content,
          status,
          featuredImage,
        }, 
      });
    } catch (error) {
      console.log(error);
    }
  }

  async deletePost(rowId) {
    try {
      await this.tablesDB.deleteRow({
        databaseId: conf.appwriteDatabaseID,
        tableId: conf.appwriteTableID,
        rowId: rowId,
      });
      return true;
    } catch (error) {
      console.log(error);
        return false;
    }
  }
}

const tableDBService = new TableDBService();

export default tableDBService;
