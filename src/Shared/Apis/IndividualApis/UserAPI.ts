import { browserLocalPersistence, createUserWithEmailAndPassword, onAuthStateChanged, setPersistence, signInWithEmailAndPassword, Unsubscribe } from "firebase/auth";
import { setDoc, doc, getDoc, CollectionReference, getDocs, query, collection, onSnapshot, QuerySnapshot, updateDoc } from "firebase/firestore";
import react, { useState } from "react"
import { auth, db } from "../../../firebase";
import { defaultUser, IUser } from "../../Interface/IUser";
import AppStore from "../../stores/AppStore";
import { AppApi } from "../AppApi";

export class UserAPI {

  collectionRef: CollectionReference;


  constructor(private api: AppApi,
    private store: AppStore,
    collectionRef: CollectionReference) {
    this.onAuthChanged();
    this.collectionRef = collectionRef;

  }

  onAuthChanged() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in.
        await this.onSignedIn(user.uid);
      } else {
        // User is signed out
        await this.onSignedOut();
      }
    });
  }


  async getAll() {
    const q = query(this.collectionRef);
    const querySnapshot = await getDocs(q);
    const items: IUser[] = [];
    querySnapshot.forEach((doc) => {
      items.push({ ...doc.data(), uid: doc.id } as IUser);
    });

    this.store.user.load(items);
  }


  async laodUser(uid: string) {
    const docRef = doc(db, "Users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const user = { ...docSnap.data(), uid: docSnap.id } as IUser;
      console.log("Load User ", user);
      await this.store.auth.logIn(user);
      return user;
    } else return undefined;
  }

  async getAllUsers() {
    const $query = query(collection(db, "Users"));
    return await new Promise<Unsubscribe>((resolve, reject) => {
      const unsubscribe = onSnapshot(
        $query,
        (querySnapshot) => {
          const items: IUser[] = [];
          querySnapshot.forEach((doc) => {
            const user = { uid: doc.id, ...doc.data() } as IUser;
            console.log(user);
          });

          this.store.user.load(items);
          resolve(unsubscribe);
        },
        (error) => {
          reject();
        }
      );
    });
  }

  async onSignup(user: IUser) {
    const { email, password = `${user.fullName}` } = user;

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).catch((error) => {
      return null;
    });




    if (userCredential) {
      user.uid = userCredential.user.uid;
      await setDoc(doc(db, "Users", user.uid), user);
      console.log("user created")
    }
    return userCredential;
  }

  async onSignedIn(uid: string) {
    this.store.user.loading = true;
    // Get user doc
    const userDocSnap = await getDoc(doc(db, "Users", uid));

    // Don't authorize if user doesn't exists.
    if (!userDocSnap.exists()) {
      this.store.user.loading = false;
      return;
    }
    const user = { uid: userDocSnap.id, ...userDocSnap.data() } as IUser;
    await this.laodUser(uid);
    this.store.user.loading = false;
  }

  async signIn(email: string, password: string) {
    setPersistence(auth, browserLocalPersistence)
      .then(async () => {
        signInWithEmailAndPassword(auth, email, password).then(async (user) => {
          console.log("User 1", user.user, "\n\n");
          this.store.auth.loading = true;
          const uid = user?.user?.uid;
          if (uid) {
            await this.laodUser(uid);
            this.store.auth.loading = false;
          }
        });
      })
      .catch((error) => {
        this.store.auth.error = true;
        const errorCode = error.code;
        const errorMessage = error.message;
        return error;
      });

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const uid = userCredential?.user?.uid;
      console.log("User ID ", uid);

      if (uid) {
        console.log("User cred ", uid);
        await this.laodUser(uid);
      }
    } catch (error) {
      this.store.auth.error = true;
      return null
    }

  }



  async onSignedOut() {
    this.store.user.loading = true;
    await this.store.user.removeCurrentUser();
    this.store.user.loading = false;
  }

  async updateUser(user: IUser) {
    const { uid, ...all } = user;
    await updateDoc(doc(db, "Users", uid), all);
    return user;
  }



}



