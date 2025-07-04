import { useState } from 'react';

const Survey = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Merci pour votre feedback!');
    setRating(0);
    setFeedback('');
  };

  return (
    <div className="survey">
      <h3>Votre avis compte!</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Comment évaluez-vous votre expérience?</label>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span 
                key={star} 
                className={star <= rating ? 'filled' : ''}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>Avez-vous des commentaires?</label>
          <textarea 
            value={feedback} 
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Dites-nous ce que vous avez pensé..."
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Survey;