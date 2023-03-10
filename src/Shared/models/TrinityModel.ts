import { makeAutoObservable } from "mobx";
import { ITrinity } from "../Interface/ITrinity";
import AppStore from "../stores/AppStore";

export class TrinityModel implements ITrinity {

    id: string;
    audioUrl: string;
    name: string;
    artist: string;
    imgUrl: string;



    constructor(private store: AppStore, trinity: ITrinity) {
        makeAutoObservable(this)
        this.id = trinity.id;
        this.artist = trinity.artist;
        this.audioUrl = trinity.audioUrl;
        this.name = trinity.name;
        this.imgUrl = trinity.name
    }


    get asJson(): ITrinity {
        return {
            id: this.id,
            audioUrl: this.audioUrl,
            name: this.name,
            artist: this.artist,
            imgUrl: this.imgUrl
        }
    }

}