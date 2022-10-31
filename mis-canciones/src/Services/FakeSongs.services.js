const getFakeArtist = (artist)=> {

    const returnPromiseFunction = () => {
      return new Promise((resolve, reject) => {
        setTimeout(( ) => {resolve(artist)}, 100);
      });
    };
     
    const fakePromise = returnPromiseFunction();
    return fakePromise;
  }

  export default getFakeArtist