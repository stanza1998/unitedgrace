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
import { IInvoice } from "../../Interface/IInvoice";
import AppStore from "../../stores/AppStore";
import { AppApi } from "../AppApi";

export default class IroningApi {
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
            const items: IInvoice[] = [];
            querySnapshot.forEach((doc) => {
                items.push({ ...doc.data(), invoiceId: doc.id } as IInvoice);
            });

            this.store.invoice.load(items);
        });
        return unsubscribe;
    }

    async create(data: IInvoice) {
        const docRef = doc(this.collectionRef);
        data.invoiceId = docRef.id;
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
        this.store.banner.remove(id);
    }

    async update(data: IInvoice) {
        await setDoc(doc(this.collectionRef, data.invoiceId), data);
        return data;
      }


}






