const ChuckNorris = () => {
  const getChuckQuotes = async () => {
    const chuckResponse = await fetch(
      "https://api.chucknorris.io/jokes/random"
    );
    const chuckQuotes = await chuckResponse.json();

    // return chuckQuotes;
    document.getElementById("new-quote").innerHTML = chuckQuotes.value;
  };
  getChuckQuotes();
  return (
    <div className='quote'>
      <h3 className='quote__heading'>Chuck Norris Facts</h3>
      <p className='quote__text' id='new-quote'></p>
      <button onClick={getChuckQuotes}>NewFact</button>
    </div>
  );
};
export default ChuckNorris;
// https://api.chucknorris.io/jokes/random
