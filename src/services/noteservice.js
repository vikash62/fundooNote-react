import axios from "axios";

export function notedata(noteData){
    console.log(noteData);
   const response = axios.post("http://localhost:8080/note/createNote",noteData,{
            headers:{
                token:localStorage.getItem("token")
            }
            })
        return response;
        }
export function getNoteList(){
   const response = axios.get("http://localhost:8080/note/getNotes",{
            headers:{
                token:localStorage.getItem("token")
            },
            });
        return response;
        }
