import axios from 'axios';

import Token from './Token'
import AppStorage from './AppStorage'
import { has } from 'lodash';


class User{
    
    login(data){
        axios.post('/api/login',data)
        .then(res => this.responseAfterLogin(res))
        .catch(error => console.log(error.response.data))
    }

    responseAfterLogin(res){

        const access_token = res.data.access_token
        
     
        const user_name = res.data.user.name
        // const payload = access_token.split('.')[1]
        // console.log(atob(payload))

        AppStorage.store(user_name,access_token)
        window.location = '/forum'

    }

    hasToken(){
        const storedToken = AppStorage.getToken()

        if (storedToken){
            return true
        }
        else{
            return false
        }
    }

    loggedIn(){
        return this.hasToken()
    }

    logout(){
        AppStorage.clear()
        window.location = '/forum'
    }

    name(){
        if(this.loggedIn()){
            return AppStorage.getUser()
        }
    }

    id(){
        if(this.loggedIn()){
            const access_token = AppStorage.getToken()
            const payload = atob(access_token.split('.')[1])

            return payload.sub
        }
    }

}

export default User = new User();