import * as fs from 'fs';

export class JsonDataManagement{

    static async getUserById(env: string, jsonData: string, userId: string){
        const jsonFile = await fs.readFileSync(`../Workflow_Framenwork/jsonData/${env!}/${jsonData}.json`, 'utf-8');
        const user = await JSON.parse(jsonFile).find((u: { id: string; }) => u.id = userId);

        return user;
    }

    static async getUserByName(env: string, jsonData: string, username: string){
        const jsonFile = await fs.readFileSync(`../Workflow_Framenwork/jsonData/${env!}/${jsonData}.json`, 'utf-8');
        const user = await JSON.parse(jsonFile).find((u: { username: string; }) => u.username = username);
        
        return user;
    }
}
