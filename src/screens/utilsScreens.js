import SmsAndroid from 'react-native-get-sms-android';

const consoleFail = (fial) => {
  console.log('Fiald get SMS ----> ', fial);
};
const receivedSMS = (countSMS, listSMS) => {
  console.log('Count: ', countSMS);
  console.log('List: ', listSMS);
  
  const arr = JSON.parse(listSMS)

  arr.forEach( sms => {
    console.log('Object: ' + sms);
    console.log('-->' + sms.date);
    console.log('-->' + sms.body);
    alert('your message with selected id is --->' + sms.body)
  })

};

export const getSMS = () => {
  const filter = {
    box: 'inbox', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all
    indexFrom: 0, // start from index 0
    maxCount: 2, // count of SMS to return each time
  };

  SmsAndroid.list(JSON.stringify(filter), consoleFail, receivedSMS);
};
