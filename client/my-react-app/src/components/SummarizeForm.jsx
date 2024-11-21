import React, { useState } from 'react';

function SummarizeForm() {
  const [inputText, setInputText] = useState(''); 
  const [summary, setSummary] = useState(''); 
  const [loading, setLoading] = useState(false); 

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (inputText.trim() === '') return;  

    setLoading(true);  
    try {
      const response = await fetch('http://localhost:5000/api/summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await response.json();  
      if (data.summary) {
        setSummary(data.summary);  
        console.log(data);
      } else {
        setSummary('No summary found.');
      }
    } catch (error) {
      setSummary('Error occurred while fetching summary');
    }

    setLoading(false); 
  };

  return (
    <div className='bg-red-400 '>
      <h1>Dialogue Summarizer</h1>
      
      <form onSubmit={handleSubmit}>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          rows="5"
          cols="50"
          placeholder="Enter dialogue here..."
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Summarizing...' : 'Summarize'}
        </button>
      </form>

      {summary && (
        <div>
          <h3>Summary:</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default SummarizeForm;
