import { collection, CollectionReference, deleteDoc, doc, getDocs, onSnapshot, query, QuerySnapshot, setDoc } from "firebase/firestore"
import react from "react"
import { createSemanticDiagnosticsBuilderProgram } from "typescript";
import { IIndoor } from "../../Interface/IIndoor";
import AppStore from "../../stores/AppStore";
import { AppApi } from "../AppApi";


export default class IndoorApi {
    collectionRef: CollectionReference;

    constructor(
        private api: AppApi,
        private store: AppStore,
        collectionRef: CollectionReference
    ) {
        this.collectionRef = collectionRef;
    }



    async getAll() {
        const q = query(this.collectionRef);
        const querySnapshot = await getDocs(q);
        const items: IIndoor[] = [];
        querySnapshot.forEach((doc) => {
            items.push({ ...doc.data(), id: doc.id } as IIndoor);
        });
        this.store.indoor.load(items);
    }


    async create(data: IIndoor) {
        const docRef = doc(this.collectionRef);
        data.id = docRef.id;
        await setDoc(docRef, data, { merge: true });
        return data;
    }

    async deleteAll(id: string) {
        const collectionRef = collection(this.collectionRef, id);
        const q = query(collectionRef);
        const querySnapshot = await getDocs(q);

        await Promise.all(
            querySnapshot.docs.map(async (doc) => {
                await deleteDoc(doc.ref)
            })
        );
    }

    async delete(id:string){
        const docRef = doc(this.collectionRef, id);
        await deleteDoc(docRef);
        this.store.indoor.remove(id);
    }

    async update(data: IIndoor){
        await setDoc(doc(this.collectionRef, data.id), data);
        return data;
    }

}
