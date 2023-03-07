import { collection, CollectionReference, deleteDoc, doc, getDocs, onSnapshot, query, QuerySnapshot, setDoc } from "firebase/firestore"
import react from "react"
import { ICartItem } from "../../Interface/ICartItem";
import AppStore from "../../stores/AppStore";
import { AppApi } from "../AppApi";


export default class CartApi {
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
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const items: ICartItem[] = [];
            querySnapshot.forEach((doc) => {
                items.push({ ...doc.data(), cartId: doc.id } as ICartItem);
            });

            this.store.cart.load(items);
        })
        return unsubscribe
    }


    async create(data: ICartItem) {
        const docRef = doc(this.collectionRef);
        data.cartId = docRef.id;
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

    async update(data: ICartItem){
        await setDoc(doc(this.collectionRef, data.cartId), data);
        return data;
    }

}













