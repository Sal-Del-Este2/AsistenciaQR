import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth:AngularFireAuth,
    private firestore: AngularFirestore
  ) { }

  async login (email:string,password:string){
    return this.afAuth.signInWithEmailAndPassword(email,password);
  }

  // async register(email:string,password:string){
  // return this.afAuth.createUserWithEmailAndPassword(email,password); }

  async register(firstName: string, lastName: string, email: string, password: string) {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
      // Actualiza el perfil del usuario con el nombre completo
      if (userCredential.user) {
        await userCredential.user.updateProfile({
          displayName: `${firstName} ${lastName}`
        });
      }
      return userCredential; // Retorna la información del usuario registrado
    } catch (error) {
      throw error; // Manejo de errores
    }
  }

  saveButtonPress(collectionName: string, clase: string) {
    const timestamp = new Date();
    return this.firestore.collection(collectionName).add({
      timestamp, // guarda fecha y hora de la clase
      clase, // Guarda el nombre de la clase
    });
  }
  
  async logout(){
    return this.afAuth.signOut();
  }

  getUser(){
    return this.afAuth.user;
  }

}
