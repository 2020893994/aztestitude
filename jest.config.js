import { resolve } from 'path';


export default async () => {
  /* 
    Replace the <INSERT YOUR FILE NAME HERE> with the name of the cloned repo folder name 
    Eg: "../23da1134-b7a2-4e2f-bcdf-59dbab5a7595"
  */
  let __dirname = "../628b4ce8-ef1f-45bc-83e4-19579805587e";
  return {
    rootDir: resolve(__dirname, ''),
    verbose: true,
    reporters: ['default', 'jest-junit'],
    maxWorkers: 1
  };
};
