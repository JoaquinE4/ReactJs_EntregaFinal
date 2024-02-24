import { collection, getDoc, getDocs, getFirestore, doc, query, where } from "firebase/firestore"

export const getDocuments = (colName, id) => {
    const db = getFirestore();
    const colRef = collection(db, colName)
    const consulta = id ? query(colRef, where("categoria", "==", id)) : colRef;
    return getDocs(consulta).then(snapshot => {
        const allData = snapshot.docs.map(document => ({
            id: document.id,
            ...document.data()
        }));
        return allData;
    });
}

export const getDocument = (colName, id) => {
    const db = getFirestore();
    const colRef = doc(db, colName, id)
    return getDoc(colRef)
        .then(snapshot => ({ id: snapshot.id, ...snapshot.data() }));
}