function setDataToFireStore() {
  var sheet = SpreadsheetApp.openById('<your-spread-sheet-id>').getSheetByName('<your-sheet-name>');

  var certification = fireStoreCertification();
  var firestore = FirestoreApp.getFirestore(certification.email, certification.key, certification.projectId);

  try {
    // スプレッドシートに応じてここは変更してください
    for ( var i = 2; i < 55; i++ ) {
      var titleValue = sheet.getRange(i,1).getValue();

      
      var newData = {
        title: titleValue
      }

      firestore.createDocument("<your-firebase-collection-name>", newData);

    }
    
  } catch(e) {
    Logger.log(e)
  }
}


function fireStoreCertification() {
  var certification = {
    "email": "<your-service-account>",
    "key": "-----BEGIN PRIVATE KEY-----\ ... \----END PRIVATE KEY-----",
    "projectId": "<your-project-id>"
  }

  return certification;
