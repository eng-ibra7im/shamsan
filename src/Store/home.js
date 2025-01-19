import {
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";

// Function to fetch document data by ID
async function fetchContactDocument(docId) {
  try {
    const docRef = doc(db, "home", docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.error("Document not found!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching document:", error);
    throw error;
  }
}

export default {
  namespaced: true,
  state: {
    homeData: {}, // State to store the fetched data
    loading: false, // State to track loading status
  },
  mutations: {
    setHomeData(state, data) {
      state.homeData = data;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    async fetchData({ commit }) {
      commit("setLoading", true);
      try {
        const querySnapshot = await getDocs(collection(db, "home"));
        const homeData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        commit("setHomeData", homeData[1]);
      } catch (error) {
        console.error("Error fetching home data: ", error);
      } finally {
        commit("setLoading", false);
      }
    },
    async addData({ commit }, formData) {
      commit("setLoading", true);
      try {
        // Assuming you have the document ID where Contact array exists
        const docId = "DAyE8v7yN8YSVj0RUYRl";

        // Fetch the document data
        const documentData = await fetchContactDocument(docId);
        if (!documentData) {
          return;
        }

        // Update the Contact array with new data
        const updatedContacts = [
          ...documentData.messages, // Existing contacts
          formData, // New form data to add
        ];

        console.log("Updated contacts: ", updatedContacts);

        // Update the document in Firestore
        const docRef = doc(db, "home", docId);
        await updateDoc(docRef, { messages: updatedContacts });

        commit("setLoading", false);
      } catch (error) {
        console.error("Error adding data to Contact array: ", error);
        commit("setLoading", false);
      }
    },
  },
};
