import { Web3Storage } from "web3.storage";

function getAccessToken() {
  // If you're just testing, you can paste in a token
  // and uncomment the following line:
  //   return 'paste-your-token-here'

  // In a real app, it's better to read an access token from an
  // environement variable or other configuration that's kept outside of
  // your code base. For this to work, you need to set the
  // WEB3STORAGE_TOKEN environment variable before you run your code.
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEFCQzM1NmNhNzM1MzI1OUUyNzExRUE1YTRiNDQ5NTkxYzhkQTYzODMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODg3MDY5ODQ2NDcsIm5hbWUiOiJnZW8td2ViLXRlc3QifQ.x4ghOC5X7IaB15yxg1vZajHZa06aYBDx0JablhP-SuE";
  //   return process.env.WEB3STORAGE_TOKEN;
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

async function checkStatus(cid) {
  const client = makeStorageClient();
  const status = await client.status(cid);
  console.log(status, "status");
  if (status) {
    // your code to do something fun with the status info here
  }
}

checkStatus("bafyreid2amk7z34hfew4ag6eug62hgxhakqvma4np2qoflj62q2zgojui4");
