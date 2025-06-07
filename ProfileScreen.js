import React, { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { uploadToImgur } from './uploadImgur';
import { db } from '../firebase/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

export default function ProfileScreen() {
  const kiesEnUpload = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled) {
      try {
        const response = await fetch(result.assets[0].uri);
        const blob = await response.blob();

        const imageUrl = await uploadToImgur(blob);

        await setDoc(doc(db, 'users', 'student001'), {
          profielfoto: imageUrl,
          voornaam: 'Lina',
          achternaam: 'El Abbassi',
        });

        console.log('✅ Upload gelukt:', imageUrl);
      } catch (error) {
        console.error('❌ Upload mislukt:', error);
      }
    }
  };

  // Automatisch uitvoeren bij laden (1x)
  useEffect(() => {
    kiesEnUpload();
  }, []);

  return null; // Geen UI nodig voor test
}
