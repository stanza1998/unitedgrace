import react from "react"
import {
    collection,
    CollectionReference,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    onSnapshot,
    query,
    setDoc,
} from "firebase/firestore";
import { IStoreCategory } from "../../Interface/IStoreCategory";
import AppStore from "../../stores/AppStore";
import { AppApi } from "../AppApi";



export default class StoreCategoryApi {
    collectionRef: CollectionReference;

    constructor(
        private api: AppApi,
        private store: AppStore,
        collectionRef: CollectionReference
    ) {

        this.collectionRef = collectionRef;
    }

    // async getAll() {
    //     const q = query(this.collectionRef);
    //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //         const items: IStoreCategory[] = [];
    //         querySnapshot.forEach((doc) => {
    //             items.push({ ...doc.data(), id: doc.id } as IStoreCategory);
    //         });

    //         this.store.category.load(items);
    //     });
    //     return unsubscribe;
    // }


    async getAll() {
        const q = query(this.collectionRef);
        const querySnapshot = await getDocs(q);
        const items: IStoreCategory[] = [];
        querySnapshot.forEach((doc) => {
            items.push({ ...doc.data(), id: doc.id } as IStoreCategory);
        });

        this.store.category.load(items);
    }

    async create(data: IStoreCategory) {
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
                await deleteDoc(doc.ref);
            })
        );
    }


    async delete(id: string) {
        const docRef = doc(this.collectionRef, id);
        await deleteDoc(docRef);
        this.store.category.remove(id);
    }

    async update(data: IStoreCategory) {
        await setDoc(doc(this.collectionRef, data.id), data);
        return data;
    }


}





