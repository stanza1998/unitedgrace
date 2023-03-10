import react from "react"


export interface ITrinity {
    id: string;
    imgUrl: string
    audioUrl: string
    name: string;
    artist: string;

}

export const defaultTrinity: ITrinity = {
    id: "",
    imgUrl: "",
    audioUrl: "",
    name: "",
    artist: ""
}

