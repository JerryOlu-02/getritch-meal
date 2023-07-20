import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase';

export const signUp = async function (email, password) {
  await createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = async function (email, password) {
  await signInWithEmailAndPassword(auth, email, password);
};

export const logOut = async function () {
  await signOut(auth);
};
