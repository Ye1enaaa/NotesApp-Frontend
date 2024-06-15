import axios from "axios";
import dotenv from 'react-dotenv';
import { Token, UserLoginCredentials, UserNotes } from "./interface.ts";


export async function authenticateUser(userLoginCredentials:UserLoginCredentials):Promise<void> {
    try{
        const response = await axios.post(`${dotenv.API_URL}/auth/jwt/create/`, userLoginCredentials)
        const token = response.data.access;
        if(response.status === 200){
            document.cookie = `token=${token}; path=/; max-age=3600;`;
            console.log(response.status, response.data.access)
            window.location.href = '/notes'
        }else if(response.status === 401){
            window.alert('Wrong Credentials, Please double check the credentials you input!!')
        }
    }catch(error){
        console.error('Error during authentication', error)
    }
}

export async function addUserNotes(userNotes: UserNotes, token: Token):Promise<boolean> {
    try {
        axios.post(`${dotenv.API_URL}/post/add-posts`, userNotes, {
            headers:{
              'Authorization': `Bearer ${token}`
            }
          }).then((response) => {
            if(response.status === 201 || response.status === 200){
              console.log(response.data, 'Success')
              return true
            }
          });
    } catch (error) {
        console.error('Error adding note:', error);
        return false; 
    }
    return false;
}