import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Estudiante } from '../models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private firestore: AngularFirestore) { }

  getSudent() {
    return this.firestore.collection('estudiante').snapshotChanges();
  }
}
