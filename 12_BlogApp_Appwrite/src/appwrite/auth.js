import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setProject(conf.appwriteProjectID) // Your project ID
            .setEndpoint(conf.appwriteURL);

        this.account = new Account(this.client);
    }

    async createUser({email, password}){
        try{
            const userAccount = await this.account.create({userId: ID.unique(), email, password});

            if(userAccount) { /**  redirect to another component */ return this.loginUser({email, password}) }
            else return userAccount;

        }catch(error){

            console.log(error, error.message);

        }
    }

    async loginUser({email, password}){
        try{
            const result = await this.account.createEmailPasswordSession({email, password});
            if(result){
                // return to another function/component
            }else{
                return result;
            }
        }catch(error){
            console.log(error, error.message);
        }
    }

    async getUser(){
        try{
            return await this.account.get();
        }catch(error){
            console.log(error);
        }
        return null;
    }

    async logoutUser(){
        try{
             await this.account.deleteSession({sessionId: 'current'});
        }catch(error){
            console.log(error);
        }
        return null
    }

}



const authService =  new AuthService();

export default authService;