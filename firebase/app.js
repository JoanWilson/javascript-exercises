let data = firebase.firestore();
  data.collection("pici").get()
    .then((snapshot) => {
      snapshot.foreach((doc) => {
        console.log(doc)
      })
    })