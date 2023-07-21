import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
} from 'firebase/auth';
import { supabase } from '../supabaseClient';

export const signUp = async function (email, password) {
  const auth = getAuth();
  await createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = async function (email, password) {
  const auth = getAuth();
  await signInWithEmailAndPassword(auth, email, password);
};

export const logOut = async function () {
  const auth = getAuth();
  await signOut(auth);
};

export const resetPassword = async function (email) {
  const auth = getAuth();
  await sendPasswordResetEmail(auth, email);
};

export const changeEmail = async function (user, email) {
  await updateEmail(user, email);
};

export const changePassword = async function (user, password) {
  await updatePassword(user, password);
};
